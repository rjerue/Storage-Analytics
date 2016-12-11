# Play framework, ReactJs and webpack

### What is this?

This is a project made for CS320 at UMass Amherst that renders some data visualization. This application was made for HP using data that they provided, but are unable to upload here.
This is a simple project to illustrate how to setup playframework to work with react js, es6 and webpack.

## What do I need?

* JDK8 shipped with a JavaScript runtime: [Nashorn](http://openjdk.java.net/projects/nashorn/)
* React supports server side rendering via
  [`React.renderToString`](http://facebook.github.io/react/docs/top-level-api.html#react.rendertostring).
* The [Play Framework](http://playframework.com/) is a web framework that runs
  on the JVM.
* You will also need [Sass](http://sass-lang.com/)
* [NodeJS](https://nodejs.org/en/) used for packaging.

With these powers combined, Play can use the same JavaScript sent to the client
to render its templates on the server.

## To try it out:

1. Install [JDK8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) for your platform.
2. Install [Scala] (https://www.scala-lang.org/download/) for your platform. Tested using 2.12.0
3. Install [Scala Build Tool](http://www.scala-sbt.org/download.html) for your platform. Tested using 0.13.13
4. Install [Node](https://nodejs.org/en/) for your platform.
5. Clone this repository
6. Run `npm install` to install dependencies.
7. Run the app with `sbt run` and wait for webpack to do its thing.
8. View [http://localhost:9000/](http://localhost:9000/) in your browser
9. If you need to make changes, delete the `app/assets/javascrips/build` folder. If you run into webpack issues, try installing it globally with `npm install -g webpack` and reboot your PC.
