---
title: "The external player protocol"
description: "A developer guide on how the external player protocol works"
type: developer
author: "Mario Ortiz Manero"
---

The external player defines a public model to follow to communicate with other devices. That way, anyone can implement their own app or program to display the videos. Here's a more detailed description of how to do so:

## Establishing the connection
To connect the devices, a [DNS-based Service Discovery (DNS-SD)](https://en.wikipedia.org/wiki/Zero-configuration_networking#DNS-SD) mechanism is used. The Vidify server will register itself in the network, and anyone inside it will be able to connect to it.

This protocol requires defining a service name and a service type. They will always be `vidify - xxxx`, and `_vidify._tcp.`, respectively. The service name can include a brief description about the device (`xxxx`), but must always have an identifiable keyword (`vidify`).

The DNS-SD registration will also include the following details about the Vidify server in its metadata:

```
id: "vidify"
version: "X.Y.Z"
os: "LINUX", "WINDOWS", "MACOS" or "BSD"
api: "MPRIS_LINUX", "SPOTIFY_WEB"...
```

The provided version name should be checked inside the implementation in order to make sure that the connection is compatible. For example, Vidify 2.3.0 may not be compatible with your latest implementation version, so you shouldn't try to connect to it in the first place.

The Vidify server is able to handle multiple connections at once, so you should take that in mind when developing your implementation.

The protocol communication is based on JSON messages with UTF-8 encoding.

## Connection acknowledgement
To establish a connection between a Vidify server and an app, there must first take place a confirmation. The app will send its own ID, along with some additional data, in order to make sure that both are compatible. This is currently not used inside Vidify's external player, but it's still required for future features.

These are the defined fields for the initial message:

```
{
    'id': 'com.glowapps.vidify',
    'version': '0.3.2'  # optional
}
```

The ID, should be unique to avoid collisions with other implementations. The server will reply with the following structure:

```
{
    'success': false,
    'error_msg': 'The version 0.2.3 is incompatible ...'  # optional
}
```

## Communication
Once the connection has been established successfully, the client doesn't need to send any other messages. The Vidify server will notify all its connected clients of updates in the music video metadata with these fields:

```
{
    'url': 'https://youtube.com/...',
    'relative_pos': -1200,  # optional
    'absolute_pos': 4000,  # optional
    'is_playing': true  # optional
}
```

`url` is a mandatory field that indicates in respect to what video the update is being sent. The client will compare it to the currently playing video. If it's the same, it will just update its metadata. Otherwise, a new video will start playing with the indicated properties.

The position field can be indicated as relative or absolute to the current status to the video. If both are provided, the absolute position has priority over the relative.
