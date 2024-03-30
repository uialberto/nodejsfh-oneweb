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

# Run Project - DEV


1. Clonar el Archivo .env.template y crear el archivo .env con las variables respectivas