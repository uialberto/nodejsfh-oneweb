import { Router } from "express";
import { TodosController } from "./controller";
import { TodoDatasourceImpl } from "../../infrastructure/datasource/todo.datasource.impl";
import { TodoRepository } from "../../domain";
import { TodoRepositoryImpl } from "../../infrastructure/repositories/todo.repository.impl";



export class TodosRoutes
{

    static get routes():Router {

        const router = Router();

        const dataSource = new TodoDatasourceImpl();
        const todoRepo = new TodoRepositoryImpl(dataSource);
        const todosControll = new TodosController(todoRepo);
        // router.get('/api/todos',(req, res) => todosControll.getTodos(req,res));
        router.get('/',todosControll.getTodos);
        router.get('/:id',todosControll.getTodoById);
        router.post('/',todosControll.createTodo);
        router.put('/:id',todosControll.updateTodo);
        router.delete('/:id',todosControll.deleteTodo);


        return router;

    }

}