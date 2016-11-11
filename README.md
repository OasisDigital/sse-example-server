# Example SSE server - FX data, Node

## SSE

This project generates random but vaguely realistic looking foreign exchange
(the "FX") data, and feeds it to connected clients using SSE. It was created to
support an example Angular 2 application for use in Angular Boot Camp and other
content from Oasis Digital.

## SSE

SSE is "server
sent events"; you can think of it as like web sockets, but it works only in the
downward direction, it is simpler than web sockets, and it fits through a
greater variety of off-the-shelf HTTP-based infrastructure. Overall SSE is a
very good choice for applications that push data from a server to connected
pages, but otherwise use a more typical HTTP/POST/etc based approach for
client/server communication.

<https://en.wikipedia.org/wiki/Server-sent_events>

SSE is generally well supported among major server-side development platforms.
For example, projects using Java Spring Boot can quite easily support SSE:

<https://docs.spring.io/spring/docs/current/javadoc-api/org/springframework/web/servlet/mvc/method/annotation/SseEmitter.html>

(but for this example application, Node is a leaner choice.)

## Fake FX Data

The algorithm used here, to generate somewhat realistic looking fake FX data, is
mostly borrowed from the following excellent book. However the code in that book
for the algorithm was in PHP, so it is re-implemented here in TypeScript.

<http://shop.oreilly.com/product/0636920030928.do>

## Node with TypeScript

At Oasis Digital we most often write Node projects using TypeScript. This has various advantages:

* Most of the newer language features from Babel, but with a single dependency
  which itself has far fewer dependencies.
* More commonality with our Angular 2 client code (A2 applications are mostly TypeScript).
* All the benefits of the type system, even in our projects which don't use
  Angular 2 - Our React work is sometimes in TypeScript also.

## Tests?

No tests, it's just a toy

## Running

```
npm install
npm start
```

Then visit:

<http://localhost:8005/>

The webpage is extremely simple, meant only to show that this fake data SSE
server works. The idea is that this server can be used to support much more
sophisticated client applications.

To see the SSE dataflow in action at the command line:

```
curl http://localhost:8005/lowfreq
curl http://localhost:8005/highfreq
```

## Contact

Author:

Kyle Cordes, @kylecordes, <http://kylecordes.com>

Angular Boot Camp training:

<https://angularbootcamp.com/>

Our blog:

<http://blog.oasisdigital.com/>

Our other services:

<http://oasisdigital.com/>
