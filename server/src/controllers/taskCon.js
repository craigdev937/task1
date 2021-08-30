import { pool } from "../config/database.js";

export const CreateTask = async (req, res, next) => {
    try {
        const { name, title, completed } = req.body;
        const createQuery = `INSERT INTO tasks 
        (name, title, completed) 
        VALUES ($1, $2, $3) RETURNING *`;
        const values = [name, title, completed];
        const newTask = await pool.query(createQuery, values);
        res.json(newTask.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetAllTasks = async (req, res, next) => {
    try {
        const getAllQuery = "SELECT * FROM tasks";
        const allTasks = await pool.query(getAllQuery);
        res.json(allTasks.rows);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const FetchOneTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const fetchOneTask = `
            SELECT * FROM tasks
            WHERE id = $1
        `;
        const values = [id];
        const task = await pool.query(fetchOneTask, values);
        res.json(task.rows[0]);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const UpdateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, title, completed } = req.body;
        const updateQuery = `UPDATE tasks 
        SET name = $1, title = $2, completed = $3 
        WHERE id = $4 RETURNING *`;
        const values = [name, title, completed, id];
        const updateTask = await pool.query(updateQuery, values);
        res.status(200).json("The Task was Updated!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);        
    }
};

export const DeleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteQuery = `
            DELETE FROM tasks 
            WHERE id = $1
        `;
        const values = [id];
        const deleteTask = await pool.query(deleteQuery, values);
        res.status(200).json("The Task was Deleted!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);        
    }
};





