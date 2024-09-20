// Método simples: Usando innerHTML
const titulo = document.getElementById('titulo');
titulo.innerHTML = 'Bem-vindo à minha loja!';

// Criando o produto
const produto = document.createElement('div');
produto.classList.add('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Smartphone Top';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'O melhor smartphone do mercado!';

const precoProduto = document.createElement('p');
precoProduto.textContent = 'R$ 3.000,00';

// Adicionando os elementos filhos ao produto
produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);

// Adicionando o produto ao corpo
document.body.appendChild(produto);
