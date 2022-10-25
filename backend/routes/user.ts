import express from "express";

//controllers
import { store } from "../controllers/User";
//validation
import { userStoreValidate } from "../validations/user";
const router = express.Router();

router.post("/create", userStoreValidate, store);

export default router;
