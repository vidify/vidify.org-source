---
title: "Optional parameters for functions in Rust"
description: "Analyzing the different approaches for optional parameters in \
Rust"
author: "Mario Ortiz Manero"
type: developer
draft: true
date: 2020-09-13
---

*Disclaimer: although this post is not directly related to Vidify, I decided to
post it here, since this problem arose in the process of integrating Rust,
while improving
[Rspotify](https://github.com/ramsayleung/rspotify/pull/120#issuecomment-683349883).*

Optional and default parameters in Rust are usually approached with the [builder
pattern](https://doc.rust-lang.org/1.0.0/style/ownership/builders.html). This is
a very solid approach when constructing data structures, but it's not as
straightforward for multiple functions. Say your library has various endpoints
like so:

```rust
fn endpoint<T1, T2, T3, ...>(mandatory: T1, opt1: Option<T2>, opt2: Option<T3>, ...)
```

In this case, when you call `endpoint`, you have to use `endpoint(mandatory,
None, None, ...)`, or `endpoint(mandatory, Some(val1), Some(val2), ...)`,
instead of the more intuitive `endpoint(mandatory)` or `endpoint(mandatory,
val1, val2)`. Other languages like Python have named arguments, which make
optional parameters natural and easier to read: `endpoint(mandatory, opt1=val1,
opt2=val2)`, also allowing to group up these parameters in any order.

There are lots of ways to approach this in Rust, which is what this blog post
tries to analyze. My goal is not to show which one is the "best" approach, but
to showcase how it can be done, and the ups and downs of each of them.

## Introducing an example
Let's start with a typical web API wrapper library. These often require a client
struct to hold authentication fields and such:

```rust
/// The main API with credentials and such
#[derive(Default, Debug, Clone)]
struct APIClient;
```

This client will have various endpoints which can be used to send requests to
the server. In this example, we will use a function with the actual
implementation to avoid repeating it for each approach we come up with:

```rust
use std::error::Error;

/// Some value that the endpoint will return
#[derive(Debug, Default)]
struct Value;
type ReturnedValue = Result<Value, Box<dyn Error>>;

/// The actual code for the endpoint, to avoid repetition later on
fn actual_endpoint(name: &str, opt1: Option<u32>, opt2: Option<i32>) -> ReturnedValue {
    println!("params: {} {:?} {:?}", name, opt1, opt2);

    Ok(Default::default())
}
```

## A) Using `Option<T>`
The simplest way to do this would be to just use the `actual_endpoint` function
signature. Sometimes the best solution is the simplest, and your project just
might not need more complex approaches. Do consider if anything more elaborate
is actually necessary.

For the sake of this example, it would look like this:

```rust
impl APIClient {
    pub fn approach_a(&self, name: &str, opt1: Option<u32>, opt2: Option<i32>) -> ReturnedValue {
        actual_endpoint(name, opt1, opt2)
    }
}
```

```rust
let api = APIClient {};
let param2: u32 = 324;

api.approach_a("option", Some(param2), Some(1234))?;
api.approach_a("option", None, None)?;
```

### Upsides
* Simplest to understand and implement.

### Downsides:
* Multiple optional parameters require lots of `None` and `Some`.
* Parameter name unknown when reading the code, specially annoying with the
`None` parameters, since these don't have context.

## B) With `Into<Option<T>>`
A variation of the previous approach consists on using `Into<Option<T>>` as the
generic value for the optional parameters (`impl Into<Option<T>>` can be used as
well). This way, `Some` isn't needed when the optional parameters are specified:

```rust
impl APIClient {
    pub fn approach_b<T1, T2>(&self, name: &str, opt1: T1, opt2: T2) -> ReturnedValue
    where
        T1: Into<Option<u32>>,
        T2: Into<Option<i32>>,
    {
        actual_endpoint(name, opt1.into(), opt2.into())
    }
}
```

```rust
api.approach_b("into_option", param2, 1234)?;
// This still works
api.approach_b("into_option", Some(param2), Some(123))?;
api.approach_b("into_option", None, None)?;
```

### Upsides:
* `Some(...)` isn't required, feels more natural.

### Downsides:
* Multiple optional parameters still requires lots of `None`s.
* Parameter name unknown when reading the code, specially annoying with the
`None` parameters, since these don't have context.
* More complex function signatures.
* Requires generics, 2^N copies of this function may be generated, where N is
the number of optional parameters.

## C) With a custom struct
Another option is to create a struct that holds the parameters and use that
instead. The complexity is still relatively simple, and it can work out well
if the API has functions with repetitive arguments:

```rust
mod params {
    pub struct ApproachC {
        pub name: String,
        pub opt1: Option<u32>,
        pub opt2: Option<i32>,
    }
}

impl APIClient {
    pub fn approach_c(&self, data: &params::ApproachC) -> ReturnedValue {
        actual_endpoint(&data.name, data.opt1, data.opt2)
    }
}
```

```rust
let call1 = params::ApproachC {
    name: "builder".to_string(),
    opt1: Some(param2),
    opt2: Some(123),
};
let call2 = params::ApproachC {
    name: "builder".to_string(),
    opt1: None,
    opt2: None,
};
api.approach_c(&call1)?;
api.approach_c(&call2)?;
```

### Upsides:
* The struct can be reused in different calls.

### Downsides:
* Multiple optional parameters require lots of `None` and `Some`.
* Way more verbose.
* Can be difficult to scale, needs a struct and a function per endpoint.

## D) With the builder pattern:
The previous approach can be improved by using the builder pattern for the
struct, so that building the parameters is simpler and more pretty to look at.
In this case, we use the
[`derive_builder`](https://crates.io/crates/derive_builder) crate to make the
implementation less repetitive:

```rust
mod params {
    #[derive(Default, Builder)]
    pub struct ApproachD {
        #[builder(setter(into))]
        pub name: String,
        #[builder(setter(strip_option), default)]
        pub opt1: Option<u32>,
        #[builder(setter(strip_option), default)]
        pub opt2: Option<i32>,
    }
}

impl APIClient {
    pub fn approach_d(&self, data: &params::ApproachD) -> ReturnedValue {
        actual_endpoint(&data.name, data.opt1, data.opt2)
    }
}
```

```rust
let call1 = params::ApproachDBuilder::default()
    .name("builder")
    .opt1(param2)
    .opt2(2134)
    .build()?;
let call2 = params::ApproachDBuilder::default()
    .name("builder")
    .build()?;
api.approach_d(&call1)?;
api.approach_d(&call2)?;
```

### Upsides:
* The struct can be reused in different calls.
* More syntactic sugar than just a struct.

### Downsides:
* Still quite verbose.
* Can be difficult to scale, needs a struct and a function per endpoint.
* More overhead, both at runtime and compile-time.

## E) Endpoint-oriented interface:
Here's a different take: what if the API was endpoint-oriented instead of
client-oriented? Starting from the previous approach, we could make the call
inside the struct itself instead of in the API client by overriding the `build`
method:

```rust
#[derive(Default, Builder)]
#[builder(build_fn(private))]
struct ApproachE {
    #[builder(setter(into))]
    pub name: String,
    #[builder(setter(strip_option), default)]
    pub opt1: Option<u32>,
    #[builder(setter(strip_option), default)]
    pub opt2: Option<i32>,
}

impl ApproachEBuilder {
    pub fn call(&self, client: &APIClient) -> ReturnedValue {
        let data = self.build()?;
        client.actual_endpoint(&data.name, data.opt1, data.opt2)
    }
}
```

```rust
ApproachEBuilder::default()
    .name("endpoint-oriented")
    .opt1(param2)
    .opt2(1111)
    .call(&api)?;
ApproachEBuilder::default()
    .name("endpoint-oriented")
    .call(&api)?;
```

### Upsides:
* Simple to use and implement.

### Downsides:
* Still relatively verbose, might not fit well with some APIs.
* More overhead, both at runtime and compile-time.

## F) Previous endpoint without derive_builder. This way, the client is
only stored in the builder, and running `build` (renamed to `call` in
this case) is the same as performing the request.

```rust
api.approach_f("builder-from-scratch")
    .opt1(param2)
    .opt2(2222)
    .call()?;
```

### Upsides:
* Shows parameter names.
* No `None` or `Some` needed.

### Downsides:
* Requires `call()` at the end.
* Uses a custom structure, more complex than functions, but
could be trivialized with macros.

## G) Grouping up endpoints and its optional parameters
In the previous case, the `call` method could be removed by
`approach_f`. This would require a different order for the optional
parameters:

```rust
api.opt1(param2)
    .opt2(2222)
    .approach_f("builder-from-scratch")?;
```

This way, it would be more concise. It might make more sense when used
inside a group of related enpoints. The optional parameters would be
relative to a group of builder types instead of directly to the client.
This only takes into account an ideal API where the groups share the
same optional parameters, so if any of them didn't, some rule at
compilation time could be enforced.

```rust
api.group()
    .opt1(param2)
    .opt2(2222)
    .approach_g("builder-from-scratch")?;
api.group().opt2(2222).approach_h("builder-from-scratch")?;
```

---

The code for this can be found [here]().

This was one of my first blog posts, so please let me know what you think about
the writing, the structure and just your overall rating at the [reddit thread
](). If you found any errors or things that could be improved about the Rust
code, do let me know as well.
