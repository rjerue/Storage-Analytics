package controllers

import cmdLine.CmdLine
import play.api._
import play.api.libs.json._
import play.api.mvc._

class Application extends Controller {
  def index = Action {
    Ok(views.html.app("HP Storage Analytics Application"))
  }

	def fake(sid: Int) = Action {
    Ok(views.html.app("HP Storage Analytics Application"))
  }

	def getData(sid: Int) = Action{
		Ok(Json.prettyPrint(CmdLine.runSql(""+sid)))
	}

}
