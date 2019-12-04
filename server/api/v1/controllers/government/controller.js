import l from "../../../../common/logger";
import errorHandler from "../../middlewares/error.handler";
import governmentService from "../../services/government.service";

class Controller {
  getGovernment(req, res) {
    const { query } = req;
    governmentService.getOrgPrice(query).then(response => {
      try {
        l.debug("success!!!!!!!!!");
        const {
          data: { response: result }
        } = response;
        res.send(result);
      } catch (e) {
        l.debug("error!!", e);
        errorHandler(
          new Error("!Error! [governmentController] [getGovernment]"),
          req,
          res
        );
      }
    });
  }
}

export default new Controller();
