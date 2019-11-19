import l from "../../../../common/logger";
import errorHandler from "../../middlewares/error.handler";
import menuService from "../../services/menu.service";

class Controller {
  /* ***********************
   * 메뉴 리스트 불러오기
   * - 각 조건은 추후 추가 예정
   *************************/
  getMenuList(req, res) {
    l.debug("[menuController] [getMenu] enter");
    const data = req.query;
    menuService
      .selectMenu(data)
      .then(r => {
        l.debug("[menuController] [getMenuAll] result >>", r);
        res.status(200).json({ status: true, data: r });
      })
      .catch(err => {
        l.error("[menuController] [getMenuAll] [error]", err);
        errorHandler(new Error("DB_Error"), req, es);
      });
  }

  /* ***********************
   * 메뉴 추가
   *********************** */
  insertMenu(req, res) {
    l.debug("[menuController] [insertMenu] enter");
    try {
      const data = req.body;
      menuService
        .insertMenu(data)
        .then(r => {
          l.debug("[menuController] [insertMenu] result >>", r);
          res.status(200).json({ status: true, data: r });
        })
        .catch(err => {
          l.error("[menuController] [insertMenu] [error]", err);
          errorHandler(new Error("DB_Error"), req, res);
        });
    } catch (e) {
      l.error("[menuController] [insertMenu] error > ", e);
    }
  }

  /* ***********************
   * 메뉴 수정
   *********************** */
  updateMenu(req, res) {
    l.debug("[menuController] [updateMenu] enter");
    try {
      const data = req.body;
      menuService
        .updateMenu(data)
        .then(r => {
          l.debug("[menuController] [updateMenu] result >> ", r);
          res.status(200).json({ status: true, data: r });
        })
        .catch(err => {
          l.error("[menuController] [updatetMenu] [error]", err);
          errorHandler(new Error("DB_Error"), req, res);
        });
    } catch (e) {
      l.error("[menuController] [updateMenu] error > ", e);
    }
  }
  /* ***********************
   * 메뉴 삭제
   *********************** */
  deleteMenu(req, res) {
    l.debug("[menuController] [deleteMenu] enter");
    try {
      const data = req.body;
      menuService
        .deleteMenu(data)
        .then(r => {
          l.debug("[menuController] [deleteMenu] result >> ", r);
          res.status(200).json({ status: true, data: r });
        })
        .catch(err => {
          l.error("[menuController] [deleteMenu] [error]", err);
          errorHandler(new Error("DB_Error"), req, res);
        });
    } catch (e) {
      l.error("[menuController] [deleteMenu] error > ", e);
    }
  }
}

export default new Controller();
