import db from "./db.service";
import l from "../../../common/logger";

class menuService {
  selectMenuAll() {
    const query = "select * from menu";
    l.debug("[HomeService] [selectMenuAll] query > ", query);
    return db.execute(query, []);
  }

  insertMenu(params) {
    const { name, description } = params;
    const query = "INSERT INTO MENU(CODE, NAME, DESCRIPTION) VALUES(?,?,?);";
    l.debug("HomeService] [insertMenu] query > ", query);
    l.debug("[HomeService] [insertMenu] parameters > ", params);
    return db.execute(query, params);
  }
}

export default new menuService();
