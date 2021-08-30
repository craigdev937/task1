export type TTask = {
    id: number,
    name: string,
    title: string,
    completed: boolean
};

export interface ITasks {
    tasks: TTask[]
};


