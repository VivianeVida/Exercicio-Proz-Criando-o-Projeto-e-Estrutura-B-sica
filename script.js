// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Loja de vendas de Smartphone";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>Smartphone</h2>
    <img src="https://techinter.com.br/wp-content/uploads/2023/11/melhores-celulares-da-atualidade.jpg" alt="x-salada">
    <p>Smartphone Xiaomi Redmi Note 13 Pro 5G 8GB+256GB Snapdragon 7s Gen 2, Câmera 200MP OIS, Carregamento Turbo 67W, 120Hz, AMOLED, NFC... (Preto).</p>
    <p id="preco-x-salada">R$1.899,00</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)
