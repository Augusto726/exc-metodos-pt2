const produtos = [
  { nome: "Teclado", ativo: true },
  { nome: "Monitor", ativo: true },
  { nome: "Mouse", ativo: false }
];

const temInativo = produtos.some(produto => !produto.ativo);

console.log(temInativo); 