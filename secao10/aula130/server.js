import express from "express";
const app = express();

//CRUD - Ceate Read Update Delete
//       POST  GET  PUT    DELETE

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato');
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando a porta 3000');
});