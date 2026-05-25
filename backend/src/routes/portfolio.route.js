import express from "express";

import { getPortfolio } from "../controller/portfolio.controller.js";

const router =
express.Router();

router.get(
 "/",
 getPortfolio
);

export default router;