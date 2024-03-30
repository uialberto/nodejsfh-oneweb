import { Router } from "express";
import { TodosRoutes } from "./todos/routes";
export class AppRoutes
{

    static get routes():Router {

        const router = Router();        

        // router.get('/api/todos',(req, res) => todosControll.getTodos(req,res));
        router.use('/api/todos',TodosRoutes.routes);
        
        
        return router;

    }

}