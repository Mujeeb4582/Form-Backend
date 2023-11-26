import express from "express";

import {
	createData,
	getData,
	updateData,
	getUserData,
} from "../controllers/data.js";

const router = express.Router();

router.get("/sectors", getData);
router.post("/data", createData);
router.patch("/update-data/:id", updateData);
router.get("/data/:id", getUserData);

export default router;
