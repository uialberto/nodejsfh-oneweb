# Alberto Baigorria - DEV

1. Instalar TypeScript y demás dependencias
```
npm i -D typescript @types/node ts-node-dev rimraf
```
2. Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
```
npx tsc --init --outDir dist/ --rootDir src
```

3. Crear scripts para dev, build y start ([Más sobre TS-Node-dev aquí](https://www.npmjs.com/package/ts-node-dev))
```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```

4. Generar Certificados SSL
```
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
```

4. Variables de ENV
```
npm i dotenv env-var
```
5. Usar PostgreSQL
```
npm install prisma --save-dev
npx prisma init --datasource-provider postgresql
```
warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.

Cambiar el ENV de DataBase en prisma/schema.prisma




1. DATABASE FIRTS

npx prisma db pull

2. DATABASE MODEL FIRTS

npx prisma migrate dev --name init

# Run Project - DEV


1. Clonar el Archivo .env.template y crear el archivo .env con las variables respectivas
2. Ejecutar el Comando de Docker Compose.
```
docker compose up -d
```
