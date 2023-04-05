const contatos [
  { nome: "NOME DO CONTATO", fone: "FONE DO CONTATO" }
];

const root = document.getElementById('root');

function titulo(nome) {
  const h2 = document.createElement('h2');
  return h2;
};

function InputText() {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('text');
  return inputElement;
};