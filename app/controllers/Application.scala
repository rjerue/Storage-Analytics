package controllers

import cmdLine.CmdLine
import play.api._
import play.api.libs.json._
import play.api.mvc._

class Application extends Controller {
  def index = Action {
    Ok(views.html.app("HP Storage Analytics Application"))
  }

	def tname = Action{
		Ok(Json.prettyPrint(CmdLine.runSql("1236")))
	}

}
