import l from "../../../../common/logger";
import errorHandler from "../../middlewares/error.handler";
import menuService from "../../services/menu.service";

class Controller {
  insertMenu(req, res) {
    l.debug("[menuController] [insertMenu] enter");
    try {
      
      menuService
        .insertMenu()
        .then(r => {
          l.debug("[menuController] [insertMenu] result >>", r);
          res.status(200).json({ status: true, data: r });
        })
        .catch(err => {
          l.error("[menuController] [insertMenu] [error]", err);
          errorHandler(new Error("DB_Error"), req, res);
        });
    }catch(e){
      l.error('[menuController] [insertMenu] error > ', e);
    }
  }

  getMenuAll(req, res) {
    l.debug("[menuController] [getMenu] enter");
    menuService
      .selectMenuAll()
      .then(r => {
        l.debug("[menuController] [getMenuAll] result >>", r);
        res.status(200).json({ status: true, data: r });
      })
      .catch(err => {
        l.error("[menuController] [getMenuAll] [error]", err);
        errorHandler(new Error("DB_Error"), req, es);
      });
  }
}

export default new Controller();
