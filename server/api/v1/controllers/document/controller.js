import l from "../../../../common/logger";
import errorHandler from "../../middlewares/error.handler";
import documentService from "../../services/document.service";

class Controller {
  insertDocument(req, res) {
    l.debug("[DocumentController] [insertDocument] enter ---------");
    try {
      const { params } = req.body;
      documentService
        .insertDocument(params)
        .then(r => {
          l.debug("[DocumentController] [insertDocument] result >>", r);
          res.status(200).json({ status: true, data: r });
        })
        .catch(err => {
          l.error("[DocumentController] [insertDocument] [error]", err);
          errorHandler(new Error("DB_Error"), req, res);
        });
    } catch (e) {
      l.error("[DocumentController] [insertDocument] error > ", e);
      res.send({ status: "error", error: e });
    }
  }

  getDocument(req, res) {
    try {
      l.debug("[DocumentController] [getDocument] enter ----------");
      const params = req.body;
      documentService
        .selectDocument(params)
        .then(r => {
          l.debug("[DocumentController] [getDocument] result >>", r);
          res.status(200).json({ status: true, data: r });
        })
        .catch(err => {
          l.error("[DocumentController] [getDocument] [error]", err);
          errorHandler(new Error("DB_Error"), req, es);
        });
    } catch (e) {
      l.error("[DocumentController] [insertDocument] error > ", e);
      res.send({ status: "error", error: e });
    }
  }
}

export default new Controller();
