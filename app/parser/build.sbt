lazy val root = (project in file(".")).
  settings(
    name := "parser",
    version := "1.0",
    scalaVersion := "2.11.8"
  )

	libraryDependencies ++= Seq(
		"org.xerial" % "sqlite-jdbc" % "3.7.2"
	)

	javaOptions += "-XX:MaxPermSize=1024"
