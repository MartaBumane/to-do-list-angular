export interface Task{
    title:string;
    id: number;
    description?: string;
    isDone: boolean;
    author?: string;
}