import express from "express";
const app = express();

//CRUD - Ceate Read Update Delete
//       POST  GET  PUT    DELETE

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST"> 
      Nome Cliete : <input type="text" name="nome">
      <button> Enviar </button>
    </form>
  `);
});

app.get('/testes{/:idUsuario}{/:parametro}', (req, res) => {
  console.log('Params:', req.params);
  console.log('Query:', req.query);
  res.send(`${req.params.idUsuario}, ${req.params.parametro}`);
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`${req.body.nome} - recebido`);
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando a porta 3000');
});