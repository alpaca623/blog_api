import l from "../../../../common/logger";
import errorHandler from "../../middlewares/error.handler";
import documentService from "../../services/document.service";

class Controller {
  getDocument(req, res) {
    try {
      l.debug("[DocumentController] [getDocument] enter ----------");
      // l.debug("[DocumentController] [getDocument] parameter > ", req);
      // l.debug("[DocumentController] [getDocument] parameter > ", req.params);
      // l.debug("[DocumentController] [getDocument] query > ", req.query);
      const { menu_code } = req.query;
      documentService
        .selectDocument(menu_code)
        .then(r => {
          l.debug("[DocumentController] [getDocument] result >>", r);
          res.status(200).json({ status: true, data: r });
        })
        .catch(err => {
          l.error("[error] [DocumentController] [getDocument]", err);
          errorHandler(new Error("DB_Error"), req, es);
        });
    } catch (e) {
      errorHandler(
        new Error("!Error! [DocumentController] [getDocument]"),
        req,
        res
      );
    }
  }

  insertDocument(req, res) {
    l.debug("[DocumentController] [insertDocument] enter ---------");
    try {
      const { data } = req.body;
      l.debug('[DocumentController] [insertDocument] body >> ', data)
      documentService
        .insertDocument(data)
        .then(r => {
          l.debug("[DocumentController] [insertDocument] result >>", r);
          res.status(200).json({ status: true, data: r });
        })
        .catch(err => {
          l.error("[error] [DocumentController] [insertDocument]", err);
          errorHandler(new Error("DB_Error"), req, res);
        });
    } catch (e) {
      errorHandler(
        new Error("!Error! [DocumentController] [insertDocument]"),
        req,
        res
      );
    }
  }

  updateDocument(req, res) {
    l.debug("[DocumentController] [updateDocument] enter ----------");
    try {
      const { data } = req.body;
      documentService
        .updateDocument(data)
        .then(r => {
          l.debug("[DocumentController] [updateDocument] result >>", r);
          res.status(200).json({ status: true, data: r });
        })
        .catch(err => {
          l.error("[error] [DocumentController] [updateDocument]", err);
          errorHandler(new Error("DB_Error"), req, res);
        });
    } catch (e) {
      errorHandler(
        new Error("!Error! [DocumentController] [updateDocument]"),
        req,
        res
      );
    }
  }

  deleteDocument(req, res) {
    l.debug("[DocumentController] [deleteDocument] enter ----------");
    try {
      const { data } = req.body;
      documentService
        .deleteDocument(data)
        .then(r => {
          l.debug("[DocumentController] [deleteDocument] result >>", r);
          res.status(200).json({ status: true, data: r });
        })
        .catch(err => {
          l.error("[error] [DocumentController] [deleteDocument]", err);
          errorHandler(new Error("DB_Error"), req, res);
        });
    } catch (e) {
      errorHandler(
        new Error("!Error! [DocumentController] [deleteDocument]"),
        req,
        res
      );
    }
  }
}

export default new Controller();
