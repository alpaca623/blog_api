import mariadb from "mariadb";

import l from "../../../common/logger";
import config from "../../../common/config";

class DatabaseConnection {
  constructor() {
    this.pool = mariadb.createPool(config.db);
    this.connection = mariadb.createConnection(config.db);
  }

  getPool() {
    return Promise.resolve(this.pool);
  }

  query(query, params) {
    return new Promise((resolve, reject) => {
      /***********************
       * parameter 작업 해야됨
       ***********************/

      /***********************
       * connection 이용시
       ***********************/
      // this.connection.then(conn => {
      //   conn.query(query).then(rows => {
      //     resolve(rows);
      //   }).catch(err => {
      //     l.error(`[DB_QUERY_ERROR!] >> ${err}`);
      //     reject(err);
      //   });
      // });

      /***********************
       * pool 이용시
       ***********************/
      this.pool
        .query(query, params)
        .then(rows => resolve(rows))
        .catch(err => reject(err));
    });
  }

  execute(query, params, opt = this.pool) {
    return new Promise((resolve, reject) => {
      this.query(query, params, opt)
        .then(result => resolve(result))
        .catch(err => {
          l.error(`[DB_excute] ${err}`);
          reject(err);
        });
    });
  }
}

export default new DatabaseConnection();
