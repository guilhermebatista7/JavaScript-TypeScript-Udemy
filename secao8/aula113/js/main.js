const axios = require('axios');

axios.get('https://api.opencnpj.org/20182807000442')
.then(response => {
  console.log(response);
})
.catch(error => {
  console.error(error);
});

fetch('https://api.opencnpj.org/20182807000442')
  .then(response => response.json())
  .then(dados => console.log(dados))
  .catch(erro => console.error(erro));