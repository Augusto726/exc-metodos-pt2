const produtos = [
  { nome: 'Camiseta', preco: 50 },
  { nome: 'Calça', preco: 120 },
  { nome: 'Tênis', preco: 200 }
];

const nomesMaiusculos = produtos.map(produto => produto.nome.toUpperCase());

console.log(nomesMaiusculos);