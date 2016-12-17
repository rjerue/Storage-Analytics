/**
  * Created by Anthony on 12/7/16.
  */
import scala.io.Source
import java.io.{BufferedReader, File, FileReader,BufferedWriter,FileWriter}
import java.util
import scala.collection.mutable.ArrayBuffer

object Parse {

  /**
    * Gets the column names from a file (the first line)
    * @param file The file used to get headers
    * @return Array[String] of headers
    */
  def getColNames(file:String): Array[String] = {
    val buff = new BufferedReader(new FileReader(file))
    val headers = buff.readLine().replace("\"","").split(",")  //First Line of file are headers
    for(i <- 0 until headers.length){
      headers(i) = "[" + headers(i).toUpperCase() + "]"
    }
    buff.close()
    headers
  }

  /**
    * Gets the data types of the file(Using second line)
    * @param file The files used to get data types
    * @return An Array[String] of data types
    */
  def getDatatypes(file:String): Array[String] = {
    val buff = new BufferedReader(new FileReader(file))
    buff.readLine() //Skip the header line
    val types = buff.readLine().replace("\"","").split(",")
    val dataTypes = Array.fill(getColNames(file).length)("")
    for(i <- 0 until types.length){
      if((getColNames(file))(i) == "[SYSTEM_MODEL]"){
        dataTypes(i) = "TEXT"
      }
      else if(Patterns.findNum(types(i))== true || types(i) == ""){
        dataTypes(i) = "REAL"
      }
      else if((Patterns.findDate(types(i)))._2 == true){
        dataTypes(i) = "TEXT"
      }
      else{
        dataTypes(i) = "TEXT"
      }

    }
    buff.close()
    dataTypes
  }

  /**
    * Parse a Single CSV File
    * @param file The file to be parsed and inserted into table
    * @param tableName The name of the database
    */
  def parseFile(file: String,tableName:String) : ArrayBuffer[Array[String]] = {
    val numLines = new BufferedReader(new FileReader(file)).lines().count()   //Total number of lines in file
    val buff = new BufferedReader(new FileReader(file))
    val parsedFile = ArrayBuffer[Array[String]]()     //Empty ArrayBuffer
    buff.readLine()     //Skip the header line
    var line:String = null
    while({line = buff.readLine(); line != null}) { //Read all lines in file
      val l = line.replace("\"", "").split(",")
      val arr = Array.fill(getColNames(file).toArray.length)("")
      for (i <- 0 until l.length) {
          arr(i) = l(i)
      }
      parsedFile += arr
    }
    buff.close()
    parsedFile
  }

  /**
    * Parses an entire directory of files
    * @param dir  The directory of csv files
    * @param tableName The name of table
    */

  def parseDirectory(dir:Array[File],tableName:String):Unit = {
    val colNames = getColNames(dir(0).toString)
    val dataTypes = getDatatypes(dir(0).toString)
    for (file <- 0 until dir.length)
    {
      DB.Insert(colNames,dataTypes,parseFile(dir(file).toString,tableName),tableName)
      println("Files Parsed: " + file +"/" + dir.length)
    }
    println("Files Parsed: " + dir.length +"/" + dir.length)
    println(tableName + " Complete")
  }

  /**
    *
    * @param dir: A directory of files
    * @param tableName: The name of the table the files will be inserted into
    * @return ArrayBuffer of all averages
    */
  def Averages(dir: Array[File],tableName: String): ArrayBuffer[Array[String]] = {
    val dataTypes =getDatatypes(dir(0).toString)
    val colNames = getColNames(dir(0).toString)
    var allAverages = new ArrayBuffer[Array[String]]()
    for(file <- 0 until dir.length){
      println("Average: " + file + "/" + dir.length)
      var average = Array.fill(dataTypes.length)("")
      val parsed = parseFile(dir(file).toString,tableName)
      for(i <-0 until parsed(0).length){
        var avg = 0.0;
        var count = 0
        for(j <- 0 until parsed.length){
          if(dataTypes(i) == "REAL"){
            if(parsed(j)(i) != "" && parsed(j)(i) != null){
              avg += parsed(j)(i).toDouble
              count += 1
            }
          }
        }
        average(i) = (avg/count).toString
      }
      allAverages += average
    }
    DB.Insert(colNames,dataTypes,allAverages,tableName)
    allAverages
  }


}
