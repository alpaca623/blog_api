import express from "express";
import homeRouter from "./controllers/home/router";
import menuRouter from "./controllers/menu/router";
import documentRouter from "./controllers/document/router";

const router = new express.Router();

router.use("/home", homeRouter);
router.use("/menu", menuRouter);
router.use("/document", documentRouter);

export default router;
