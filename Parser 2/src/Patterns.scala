/**
  * Created by Anthony on 12/8/16.
  */

import java.text.SimpleDateFormat
object Patterns {

  /**
    *
    * @param num Determine if num is a number
    * @return true if num is a number
    */
  def findNum(num : String) : Boolean = {
    try {
      val i = num.toDouble
    }
    catch {
      case e: Exception => return false
    }
    return true
  }

  /**
    * Determine id d is a date using SimpleDateFormat
    * @param d A possible date
    * @return ._1 java.util.Date, _2 true if d is a date
    */
  def findDate(d: String): (java.util.Date,Boolean) = {

    val timestamp = "yyyy-mm-dd hh:mm:ss"  //format of two different times in csv files
    val date = "yyyy-mm-dd"

    try{
      val date1 = new SimpleDateFormat(timestamp)
      val da = date1.parse(d)
      return (da,true)
    }
    catch{
      case e : Exception => None
    }

    try{
      val date2 = new SimpleDateFormat(date)
      val da = date2.parse(d)
      return (da,true)
    }
    catch{
      case e : Exception => None
    }
    (null,false)
  }

}
