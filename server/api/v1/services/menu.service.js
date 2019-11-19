import db from "./db.service";
import l from "../../../common/logger";

class menuService {
  selectMenu() {
    const query = "select * from menu";
    l.debug("[HomeService] [selectMenuAll] query > ", query);
    return db.execute(query, []);
  }

  insertMenu(params) {
    const parameters = [params.code, params.name, params.description];
    const query = "INSERT INTO MENU(CODE, NAME, DESCRIPTION) VALUES(?,?,?);";
    l.debug("[HomeService] [insertMenu] query > ", query);
    l.debug("[HomeService] [insertMenu] parameters > ", parameters);
    return db.execute(query, parameters);
  }

  updateMenu(params){
    const parameters = [params.name, params.code];
    const query = 'UPDATE MENU SET name=? WHERE CODE=?';
    l.debug("[HomeSErvice] [updateMenu] query > ", query);
    l.debug("[HomeSErvice] [updateMenu] parameters > ", parameters);
    return db.execute(query, parameters);
  }
  
  deleteMenu(params){
    const parameters = [params.code];
    const query = 'DELETE FROM MENU WHERE CODE=?';
    l.debug("[HomeSErvice] [deleteMenu] query > ", query);
    l.debug("[HomeSErvice] [deleteMenu] parameters > ", parameters);
    return db.execute(query, parameters);
  }
}

export default new menuService();
