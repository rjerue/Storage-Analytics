package cmdLine

import java.lang._
import java.io._
import play.api.libs.json._

import scala.io.Source

object CmdLine {
	def main(args: Array[String]) : Unit = {
  }
	def runSql(SystemID : String) : JsValue =  {
		val intSystemID = new Integer(SystemID)
		val p : Process = Runtime.getRuntime().exec(s"python E:\\CmdLinePython.py $intSystemID"); // Change this to match file path
		p.waitFor()
    val fileContents : JsValue = Json.parse(Source.fromFile("JsonDumpFile.json").getLines.mkString)
    fileContents
    }
}
