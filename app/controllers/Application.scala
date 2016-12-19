package controllers

import play.api._
import play.api.mvc._

class Application extends Controller {
  def index = Action {
    Ok(views.html.app("HP Storage Analytics Application"))
  }

	def tname = Action{
		Ok("HP Storage Analytics Application")
	}

}
