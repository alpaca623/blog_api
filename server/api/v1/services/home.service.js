import l from "../../../common/logger";
import dbService from "./db.service";

class HomeService {
  getMenuList() {
    const query = "select * from menu";
    l.debug("[HomeService] [getMenuList]", query);
    return dbService.execute(query);
  }
}

export default new HomeService();
