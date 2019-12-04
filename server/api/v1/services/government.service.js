import l from "../../../common/logger";
import { reqGet } from "../../../common/api.government";
import config from "../../../common/config";

class GovernmentService {
  getOrgPrice(config) {
    return reqGet(config);
  }
}

export default new GovernmentService();
