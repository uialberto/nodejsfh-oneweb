import { Router } from "express";
import { TodosController } from "./controller";



export class TodosRoutes
{

    static get routes():Router {

        const router = Router();


        const todosControll = new TodosController();

        // router.get('/api/todos',(req, res) => todosControll.getTodos(req,res));
        router.get('/',todosControll.getTodos);
        router.get('/:id',todosControll.getTodoById);
        router.post('/',todosControll.createTodo);
        router.put('/:id',todosControll.updateTodo);
        router.delete('/:id',todosControll.deleteTodo);


        return router;

    }

}