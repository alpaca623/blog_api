import l from "../../../common/logger";
import db from "./db.service";

class DocumentService {
  insertDocument(params) {
    const parameters = [params.title, params.content, params.menu_code];
    l.debug("[DocumentService] [insertDocument] enter");
    const query =
      "INSERT INTO document(title, content, menu_code) VALUE(?,?,?);";
    l.debug("[DocumentService] [insertDocument] query > ", query);
    l.debug("[DocumentService] [insertDocument] params > ", parameters);
    return db.execute(query, parameters);
  }

  selectDocument(params) {
    l.debug("[DocumentService] [selectDocumentAll] enter");
    let query = "select * from document";
    return db.execute(query, []);
  }
}

export default new DocumentService();
