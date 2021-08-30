import { TTask } from "../models/ITasks";
import { useQuery } from "react-query";
const URL = "http://localhost:9000/api";

export const fetchOneTask = 
async (id: number): Promise<TTask> => {
    const res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
        throw new Error("Something went wrong!");
    };
    return res.json();
};

export const useTaskByID = (id: number) => {
    return useQuery({
        queryKey: `${id}`,
        queryFn: () => fetchOneTask(id),
    })
};

export const getAllTasks = 
async (): Promise<TTask> => {
    const res = await fetch(URL);
    if (!res.ok) {
        throw new Error("Something went wrong!");
    };
    return res.json();
};



