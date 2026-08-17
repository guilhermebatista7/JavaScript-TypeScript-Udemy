import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { escrever } from './modules/escrever.js';
import { ler } from './modules/ler.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const caminhoArquivo  = path.resolve(__dirname, '..', 'teste.txt');

const pessoas = [
  {nome: 'Guilherme'},
  {nome: 'Yasmin'},
]

const json = JSON.stringify(pessoas);

//escrever(caminhoArquivo, json);

async function lerArquivo(caminho){
  const dados = await ler(caminho);
  return dados;
}

lerArquivo(caminhoArquivo)
  .then(response => JSON.parse(response))
  .then(response => console.log(response))
  .catch((e)=>console.log(e));


/*
async function lerArquivo(caminho){
  const dados = await ler(caminho);
  renderiza(dados);
}

function renderiza(dados){
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val));
}

lerArquivo(caminhoArquivo);
*/