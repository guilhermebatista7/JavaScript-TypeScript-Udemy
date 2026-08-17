import fs from 'node:fs/promises';

export const escrever = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' });
}