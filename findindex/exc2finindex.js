const produtos = [
  { nome: "Teclado", ativo: true },
  { nome: "Monitor", ativo: true },
  { nome: "Mouse", ativo: false },
  { nome: "Webcam", ativo: false }
];

const indiceInativo = produtos.findIndex(produto => !produto.ativo);

console.log(indiceInativo); 