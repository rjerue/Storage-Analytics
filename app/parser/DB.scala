/**
  * Created by Anthony on 12/7/16.
  */
import java.sql.DriverManager
import java.sql.Connection
import java.sql.ResultSet
import java.sql.PreparedStatement
import scala.collection.mutable.ArrayBuffer

object DB {


  /**
    * Connects to an SQLite Database
    * @return
    */
  def getConnection(): Connection = {
    var conn:Connection = null
    try {
      Class.forName("org.sqlite.JDBC")
      conn = DriverManager.getConnection("jdbc:sqlite:DataCore.db")
      conn.setAutoCommit(false)
    } catch {
      case e: Exception => e.printStackTrace()
        sys.exit()
    }
    conn
  }

  /**
    * Creates a table in the database
    * @param colNames The name of each column
    * @param dataTypes The data type associates with each column
    * @param tableName The name of the table to be created
    */
  def CreateTable(colNames: Array[String],dataTypes: Array[String],tableName:String,primaryKey:String = null): Unit = {
    val conn = getConnection()
    val stmt = conn.createStatement()
    stmt.execute("DROP TABLE IF EXISTS " + tableName)
    var create:StringBuilder = new StringBuilder("CREATE TABLE " + tableName + "(")  //CREATE TABLE statement
    for (i <- 0 to (colNames.length-1)){
      val name = colNames(i).toUpperCase()
      if(primaryKey == name){      //If there is a primary key, put it into the statement
        create ++= colNames(i) + " " +dataTypes(i) + " PRIMARY KEY,"
      }
      else{
        create ++= colNames(i) + " " +dataTypes(i) + ","
      }
    }
    create = create.dropRight(1)
    create ++= ")"
    stmt.executeUpdate(create.mkString)
    stmt.close()
    conn.commit()
    conn.close()
    println(tableName + " Table Created")
  }

  /**
    * Insert values into table
    * @param colNames The columns in the table
    * @param colTypes The data type of each column
    * @param colValues The values to be inserted into each column
    * @param tableName The name of the table
    */
  def Insert(colNames:Array[String],colTypes:Array[String],colValues: ArrayBuffer[Array[String]],tableName: String): Unit = {
    val c = getConnection()
    val stmt = c.createStatement()
    var insert: StringBuilder = new StringBuilder("INSERT INTO " + tableName + "(")   //Create insert statement
    for (j <- 0 until colNames.length) {
      insert ++= colNames(j) + ","
    }
    insert = insert.dropRight(1)
    insert ++= ") VALUES ("
    for (j <- 0 until colValues(0).length) {
      insert ++= "?,"

    }
    insert = insert.dropRight(1)
    insert ++= ");"
    val prep = c.prepareStatement(insert.mkString)
    for(i <- 0 until colValues.length) {      //Insert prepared statement
      for (j <- 0 until colNames.length) {
        if(colValues(i)(j) == "" || colValues(i)(j) ==null){  //If value is null, insert as null
          prep.setString(j+1,null)
        }
        else if (colTypes(j) == "REAL") {
          prep.setDouble(j + 1, colValues(i)(j).toDouble)
        }
        else {
          prep.setString(j + 1, colValues(i)(j))
        }
      }
      prep.addBatch()
    }

    prep.executeBatch()
    prep.clearBatch()
    c.commit()
    prep.close()
    stmt.close()
    c.close()
  }
}
