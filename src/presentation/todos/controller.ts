import { Request, Response } from "express";

const todos = [
    {
        id:1,
        text: "Leche",
        completedAt: new Date(),
    },
    {
        id:2,
        text: "Pan",
        completedAt: null,
    },
    {
        id:3,
        text: "Queso",
        completedAt: new Date(),
    },
];

export class TodosController {

    //* DI
    constructor(){}

    public getTodos =  (req:Request, res:Response) => {

        return res.json(todos);

    }

    public getTodoById =  (req:Request, res:Response) => {

        const id = +req.params.id;
        if(isNaN(id)) return res.status(400).json({error:`ID argument is not a number`});
        const todo = todos.find(todo => todo.id === id);
        // console.log(id, 10);
        (todo)
        ? res.json({todo})
        : res.status(404).json({error:`TODO con ID: ${id} Not Found`});

    }

    public createTodo =  (req:Request, res:Response) => {

       const {text} = req.body;
       if( !text) return res.status(400).json({error:`Text property is required`});

       const newTodo = {
        id: todos.length + 1,
        text: text,
        completedAt: null
       };

       todos.push(newTodo)

       res.json(newTodo);

    }

    public updateTodo =  (req:Request, res:Response) => {

        const id = +req.params.id;
        if(isNaN(id)) return res.status(400).json({error:`ID argument is not a number`});
        const todo = todos.find(todo => todo.id === id); 
        if (!todo) return res.status(404).json({error:`TODO con ID: ${id} Not Found`});

        const {text, completedAt} = req.body;
        // if( !text) return res.status(400).json({error:`Text property is required`});
        
        todo.text = text || todo.text;
        (completedAt === null)
        ? todo.completedAt = null
        : todo.completedAt = new Date(completedAt || todo.completedAt);        
        res.json(todo);
 
     }


     public deleteTodo =  (req:Request, res:Response) => {

        const id = +req.params.id;
        if(isNaN(id)) return res.status(400).json({error:`ID argument is not a number`});
        const todo = todos.find(todo => todo.id === id); 
        if (!todo) return res.status(404).json({error:`TODO con ID: ${id} Not Found`});
       todos.splice(todos.indexOf(todo), 1);     
        res.json(todo);
 
     }

}