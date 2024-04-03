import { Request, Response } from "express";
import { prisma } from "../../data/postgres";
import { CreateTodoDto, UpdateTodoDto } from "../../domain/dtos";
import { TodoRepository } from "../../domain";

export class TodosController {
        
    constructor(
        private readonly todoRepo: TodoRepository,
    ){}

    public getTodos = async (req:Request, res:Response) => {                
        const todos = await this.todoRepo.getAll();
        return res.json(todos);
    }

    public getTodoById =  async (req:Request, res:Response) => {
        const id = +req.params.id;
        if(isNaN(id)) return res.status(400).json({error:`ID argument is not a number`});
        try {
            const todo = await this.todoRepo.findById(id);    
            return res.json(todo);
        } catch (error) {
            return res.status(400).json({error});
        }        
    }

    public createTodo =  async (req:Request, res:Response) => {
       const [error, createTodoDto] = CreateTodoDto.create(req.body);
       if(error) return res.status(400).json({error});
       const todo = await this.todoRepo.create(createTodoDto!);
       return res.json(todo);
    }

    public updateTodo = async (req:Request, res:Response) => {

        const id = +req.params.id;
        const [error, updateTodoDto] = UpdateTodoDto.create({...req.body, id});
        if(error) return res.status(400).json({error});       
        const updateTodo = await this.todoRepo.updateById(updateTodoDto!);
        return res.json(updateTodo); 
     }


     public deleteTodo = async  (req:Request, res:Response) => {
        const id = +req.params.id;
        const deletedTodo = await this.todoRepo.deleteById(id);
        return res.json(deletedTodo);
     }

}