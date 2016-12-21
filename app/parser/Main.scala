/**
  * Created by Anthony on 12/10/16.
  */

object Main {
  def main(args: Array[String]): Unit = {
    val directory = "./perform-csv"    //**CHANGE THIS** Directory of CSV files
    val allFiles = new java.io.File(directory).listFiles()
    val allPerformance = allFiles.dropRight(1)
    val  summary = allFiles.drop(allFiles.length-1)


    /**
      * Create SUMMARY table and parse/insert file
      */
    DB.CreateTable(Parse.getColNames(summary(0).toString),Parse.getDatatypes(summary(0).toString),"SUMMARY","[SERIALNUMBERINSERV]") //Create Summary Table
    Parse.parseDirectory(summary,"SUMMARY")

    /**
      * Create PERFORMANCE table and parse/insert all files
      */
    DB.CreateTable(Parse.getColNames(allPerformance(0).toString),Parse.getDatatypes(allPerformance(0).toString),"PERFORMANCE") //Create Performance Table
    Parse.parseDirectory(allPerformance,"PERFORMANCE")

    /**
      * Create AVERAGES table and insert averages
      */
    DB.CreateTable(Parse.getColNames(allPerformance(0).toString),Parse.getDatatypes(allPerformance(0).toString),"AVERAGES","[SYSTEMID]")
    Parse.Averages(allPerformance,"AVERAGES")
  }

}
