import express from "express";
import { indexHome } from "../controllers/taskCon.js";

export const taskRt = express.Router();
    taskRt.get("/", indexHome);




