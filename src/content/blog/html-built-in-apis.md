---
author: Alberto Caparrós
pubDate: 2025-02-13T22:18:00Z
title: HTML built-in APIs
href: 'html-built-in-apis'
image:
  url: https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=350&dpr=1
  alt: A tablet showing a map
tags: ['why-first', 'html']
description: An overview of some of the most important HTML5 built-in APIs, each addressing a specific challenge in modern web development. Ranging from performance and interactivity to storage and real-time communication.
---

![A screen with closing html tag](https://images.pexels.com/photos/38271/ipad-map-tablet-internet-38271.jpeg?auto=compress&cs=tinysrgb&w=350&dpr=1)

## Geolocation API

Many web applications need to offer location-based services, such as finding nearby restaurants, mapping services, or local weather. But retrieving a user’s location reliably and securely was a challenge.

The _Geolocation API_ provides a simple, asynchronous interface that (after obtaining user permission) retrieves the device’s geographic coordinates. This lets developers integrate location features directly into their applications without relying on external plugins.

## Web Storage API (localStorage and sessionStorage)

Traditional cookies were limited in size, sent with every HTTP request (affecting performance), and lacked a straightforward way to persist data on the client side for dynamic web applications.

The _Web Storage API_ introduces two storage mechanisms:

- **localStorage**: Stores data with no expiration date, making it ideal for persisting user settings or application state between sessions.

- **sessionStorage**: Stores data only for the duration of the page session.

Both provide a simple key-value interface, are not sent with every request, and offer significantly larger storage capacity compared to cookies.

## Canvas API

Creating dynamic and interactive graphics (such as game visuals, data visualizations, or custom drawing applications) used to require external plugins or cumbersome workarounds.

The _Canvas API_ gives developers a drawable region directly in the browser. Using JavaScript, you can render 2D shapes, images, and text, manipulate pixels, and even create animations. This provides a flexible and powerful solution for generating dynamic graphics without needing third-party tools.

## Web Workers API

Intensive computations or data processing tasks can block the main UI thread, leading to unresponsive interfaces and poor user experience.

_Web Workers_ allow scripts to run in background threads separate from the main execution thread. This enables developers to offload heavy tasks (such as data crunching, image processing, or real-time calculations) without freezing the user interface, resulting in smoother and more responsive web applications.

## WebSockets API

Traditional HTTP communication is unidirectional and involves overhead from request/response cycles, making real-time, bidirectional data exchange inefficient.

The _WebSockets API_ establishes a persistent, full-duplex communication channel between the client and server over a single TCP connection. This allows both sides to send data at any time, reducing latency and overhead, which is ideal for real-time applications.

## IndexedDB API

For complex web applications (especially those requiring offline capabilities) there’s a need to store and query large volumes of structured data on the client side. Traditional storage methods like cookies or localStorage aren’t sufficient for these requirements.

_IndexedDB_ is a low-level, NoSQL database that runs in the browser. It allows you to store significant amounts of structured data and perform complex queries. This makes it ideal for applications like offline-first web apps, client-side caching, and progressive web apps (PWAs).

## Fetch API

Making HTTP requests using the older XMLHttpRequest was verbose, callback-heavy, and less intuitive. Especially for modern asynchronous code.

The _Fetch API_ offers a promise-based, streamlined interface for performing network requests. It simplifies the process of fetching resources and handling responses, making the code more readable and easier to maintain.

## History API

Single-page applications (SPAs) require a way to manage navigation and update the URL without triggering a full page reload, ensuring a smooth user experience.

The _History API_ (using methods like pushState and replaceState) enables developers to manipulate the browser's history stack. This allows for dynamic URL changes and state management in SPAs without refreshing the page, supporting both navigation and deep linking.
