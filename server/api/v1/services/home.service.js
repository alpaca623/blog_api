import sql from 'mariadb';

import l from "../../../common/logger";
import db from "./db.service";

class HomeService {
  selectMenuList() {
    const query = "select * from menu";
    l.debug("[HomeService] [selectMenuList] query > ", query);
    l.debug("[HomeService] [selectMenuList] parameters > ", params);
    return db.execute(query, params);
  }
}

export default new HomeService();
