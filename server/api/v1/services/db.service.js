import mariadb from "mariadb";

import l from "../../../common/logger";
import config from "../../../common/config";

class DatabaseConnection {
  constructor() {
    this.pool = mariadb.createPool(config.db).getConnection();
    this.connection = mariadb.createConnection(config.db);
  }

  getPool() {
    return Promise.resolve(this.pool);
  }

  query(query, params) {
    return new Promise((resolve, reject) => {
      this.connection.then(conn => {
        conn.query(query).then((err, result) => {
          if (err) {
            l.error(err);
            reject(err);
          }
          resolve(result);
        });
      });
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
