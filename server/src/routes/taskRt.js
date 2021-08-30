import express from "express";
import { CreateTask, FetchOneTask, GetAllTasks, 
    UpdateTask, DeleteTask } from "../controllers/taskCon.js";

export const taskRt = express.Router();
    taskRt.post("/", CreateTask);
    taskRt.get("/", GetAllTasks);
    taskRt.get("/:id", FetchOneTask);
    taskRt.put("/:id", UpdateTask);
    taskRt.delete("/:id", DeleteTask);




