import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from "./presentation/server";
(async () => {

    main()

})();


function main(){
    const server = new Server({
        port: envs.PORT,
        router : AppRoutes.routes,
        public_path: envs.PUBLIC_PATH,        
    });
    server.Start();
}