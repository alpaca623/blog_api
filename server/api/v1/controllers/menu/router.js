import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .get("/", controller.getMenuList)
  .post("/insert", controller.insertMenu)
  .post("/update", controller.updateMenu)
  .post("/delete", controller.deleteMenu);
