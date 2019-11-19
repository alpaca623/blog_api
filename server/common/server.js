import Express from "express";
import * as path from "path";
import * as bodyParser from "body-parser";
import * as http from "http";
import * as os from "os";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import config from "./config";
import session from "express-session";
import fs from "fs";
import ejs from "ejs";

import l from "./logger";
import errorHandler from "../api/v1/middlewares/error.handler";

const app = new Express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.set("views", __dirname + "/views");
    app.set("view engine", "ejs");
    app.engine("html", ejs.renderFile);

    app.use(Express.static('public'));
    
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || "100kb" }));
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || "100kb"
      })
    );
    app.use(
      session({
        secret: "#kka@ckkdl2))",
        resave: false,
        saveUninitialized: true
      })
    );
    // app.use(cookieParser());
    app.use(cors());
    app.use(morgan("dev"));
  }

  router(routes) {
    routes(app);
    app.use(errorHandler);

    return this;
  }

  listen(port = config.PORT) {
    const welcome = p => () =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
          "development"} @: ${os.hostname()} on port: ${p}}`
      );
    http.createServer(app).listen(port, "127.0.0.1", welcome(port));
    // process ready send pm2
    // process.send('ready');
    return app;
  }
}
