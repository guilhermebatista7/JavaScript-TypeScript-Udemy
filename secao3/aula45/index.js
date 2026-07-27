const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

const corUser = 'Rosa'; // const corUser = null;
const corPadrao = corUser || 'Preto';
console.log(nivelUsuario, corPadrao)