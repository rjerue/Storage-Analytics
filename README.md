React and Scala on Play: Storage Analytics Software
==============================

* JDK8 shipped with a JavaScript runtime: [Nashorn](http://openjdk.java.net/projects/nashorn/)
* React supports server side rendering via
  [`React.renderToString`](http://facebook.github.io/react/docs/top-level-api.html#react.rendertostring).
* The [Play Framework](http://playframework.com/) is a web framework that runs
  on the JVM

With these powers combined, Play can use the same JavaScript sent to the client
to render its templates on the server.

## To try it out:

1. Install [JDK8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) for your platform.
2. Install [Scala] (https://www.scala-lang.org/download/) for your platform. Tested using 2.12.0
3. Install [Scala Build Tool](http://www.scala-sbt.org/download.html) for your platform. Tested using 0.13.13
2. Clone this repository
4. Run the app with `sbt run`
5. View [http://localhost:9000/](http://localhost:9000/) in your browser

### What is this?

This is a project made for CS320 at UMass Amherst that renders some data visualization. This application was made for HP using data that they provided, but are unable to upload here.
