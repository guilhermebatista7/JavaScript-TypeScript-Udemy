import fs from 'node:fs/promises';

export const ler = (caminho) => {
  return fs.readFile(caminho);
}