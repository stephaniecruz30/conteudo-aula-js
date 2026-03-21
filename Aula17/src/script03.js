// Utilizando o key events
const conteudo = document.querySelector(".conteudo");
const campo = document.querySelector
("#campo");

campo.addEventListener("keydown", handletecla);

function handletecla(evento){
conteudo.innerHTML = "Você digitou: " + evento.key;
}

// Exemplo de detecção de tecla
const  campo2 = document.querySelector("#campoEnter");
const conteudo2 = document.querySelector(".conteudo2");

campo2.addEventListener("keydown", handleCondicao);

function handleCondicao(evento) {
    if (evento.code === "Enter") {
        conteudo2.innerHTML = "A tecla Enter foi pressionada!";
    }
}
