import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
fs.readdir('./')
  .then(files => console.log(files))
  .catch((e) => console.log(e));
*/

async function readdir(rootDir){
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir){
  for(let file of files){
    const filefullPath = path.resolve(rootDir, file);
    const stats = await fs.stat(filefullPath);
    //console.log(file, stats.isDirectory());

    if(stats.isDirectory()){
      readdir(filefullPath);
      continue;
    }

    if(!/\.css/g.test(filefullPath)) continue

    console.log(filefullPath);
  }
}

readdir('/Users/gb400/OneDrive/Documentos/CursoUdemyJs/');
