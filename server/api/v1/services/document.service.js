import l from "../../../common/logger";
import db from "./db.service";

class DocumentService {
  /* ************************
   * 메뉴별 문서 리스트 불러오기
   ************************ */
  selectDocument(code) {
    l.debug("[DocumentService] [selectDocumentAll] enter");
    l.debug("[DocumentService] [insertDocument] code > ", code);
    const parameters = code ? [code] : [];
    let query = "select * from document";
    if (code) {
      query = "select * from document where menu_code = ?";
    }
    l.debug("[DocumentService] [insertDocument] query > ", query);
    l.debug("[DocumentService] [insertDocument] parameters > ", parameters);
    return db.execute(query, parameters);
  }

  /* ************************
   * 문서 생성
   ************************ */
  insertDocument(params) {
    l.debug("[DocumentService] [insertDocument] enter");
    const parameters = [params.title, params.content, params.menu_code];
    const query =
      "INSERT INTO document(title, content, menu_code) VALUE(?,?,?);";
    l.debug("[DocumentService] [insertDocument] query > ", query);
    l.debug("[DocumentService] [insertDocument] parameters > ", parameters);
    return db.execute(query, parameters);
  }

  /* ************************
   * 문서 수정 하기
   * - 메뉴 코드에 대한 검사도 진행해야되나 고민중
   ************************ */
  updateDocument(params) {
    l.debug("[DocumentService] [updateDocument] enter");
    const parameters = [params.title, params.content, params.uid];
    const query = "UPDATE document set title=?, content=? WHERE uid=?";
    l.debug("[DocumentService] [updateDocument] query > ", query);
    l.debug("[DocumentService] [updateDocument] parameters > ", parameters);
    return db.execute(query, parameters);
  }

  /* ************************
   * 문서 삭제
   * - 메뉴 코드에 대한 검사도 진행해야되나 고민 중
   ************************ */
  deleteDocument(params) {
    l.debug("[DocumentService] [deleteDocument] enter");
    const parameters = [params.uid];
    const query = "DELETE FROM document where uid=?";
    l.debug("[DocumentService] [deleteDocument] query > ", query);
    l.debug("[DocumentService] [deleteDocument] parameters > ", parameters);
    return db.execute(query, parameters);
  }
}

export default new DocumentService();
