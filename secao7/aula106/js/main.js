import { validaCPF } from "../../../secao6/aula97/cpf.js";

const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(formulario);

  const name = data.get('name');
  const lastName = data.get('lastname');
  const cpf = data.get('cpf');
  const user = data.get('user');
  const password = data.get('password');
  const repeatPassword = data.get('repeatPassword');

  console.log(name, lastName, cpf, user, password, repeatPassword);

  validForm(data);
})

function validForm(data) {

  if (emptyField(data)) {
    alert('Todos os campos devem estar preenchidos');
    return;
  };

  try {
    if (!validaCPF(data.get('cpf'))) {
      alert('Digite um cpf válido');
      return;
    }
  } catch (error) {
    throw new Error;
    console.log(error);
  }

  if (validUser(data.get('user'))) {
    alert('O usuário só pode conter letras e/ou números');
    return;
  };

  if (validPassword(data.get('password'), data.get('repeatPassword'))) {
    alert('A senha precisa ter entre 6 e 12 caracteres');
    return;
  };
}

function emptyField(data) {
  if (data.get('name').length === 0) {
    return true;
  }
  if (data.get('lastname').length === 0) {
    return true;
  }
  if (data.get('cpf').length === 0) {
    return true;
  }
  if (data.get('user').length === 0) {
    return true;
  }
  if (data.get('password').length === 0) {
    return true;
  }
  if (data.get('repeatPassword').length === 0) {
    return true;
  }
}

function validUser(user) {
  const regex = /^[a-zA-Z0-9]+$/;
  return !(regex.test(user));
}

function validPassword(password, repeatPassword) {
  if (password !== repeatPassword) {
    alert("As senhas precisam ser iguais");
    return;
  }

  if (password.length < 6 || password.length > 12) {
    return true;
  }
}


