import express from "express";
import route from "./routes.js";
const app = express();

//CRUD - Ceate Read Update Delete
//       POST  GET  PUT    DELETE

app.use(express.urlencoded({extended: true}));
app.use(route);


app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando a porta 3000');
});