import l from "../../../../common/logger";
import homeService from "../../services/home.service";
import errorHandler from "../../middlewares/error.handler";

class Controller {
  getHomePage(req, res) {
    l.debug("[HomeController] [getHomePage] enter");
    homeService
      .getMenuList()
      .then(r => {
        l.debug("controller test");
        l.debug("[HomeController] [getHomePage] result >>", r);
        res.status(200).json({ status: true, data: r });
      })
      .catch(err => {
        l.error("HomeController] [getHomePage] [error]", err);
        errorHandler(new Error('DB_Error'), req, res);
      });
  }
}

export default new Controller();
