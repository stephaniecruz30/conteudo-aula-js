// Alterando atributo
const elemento = document.querySelector(".ex1");

elemento.src = "gatinho.avif";
elemento.width = 200;

// Conteúdo dinâmico (data)
const elemento2 = document.querySelector("#ex2");

elemento2.innerHTML = "Data atual " + Date();
