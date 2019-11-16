import l from "../../../../common/logger";
import homeService from "../../services/home.service";
import errorHandler from "../../middlewares/error.handler";

class Controller {
  getHomePage(req, res){
    l.debug("[HomeController] [getHomePage]");
    res.send("request home page");
  }
}

export default new Controller();
