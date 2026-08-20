export const paginaInicial = (req, res) =>{
  res.send(`
    <form action="/" method="POST"> 
      Nome Cliete : <input type="text" name="nome">
      <button> Enviar </button>
    </form>
  `);
}

export const trataPost = (req, res) => {
  res.send('Rota post pag inicial');
  console.log('nome:', req.body)
}