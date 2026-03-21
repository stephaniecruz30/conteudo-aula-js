// Utilizando o evento mouseover
const caixa = document.querySelector(".caixa");

caixa.addEventListener("mouseover", function () {
  caixa.innerHTML = "O mouse está dentro da caixa.";
  caixa.style.background = "cornflowerblue";
});

caixa.addEventListener("mouseout", function(){
    caixa.innerHTML = "O mouse está fora da caixa.";
    caixa.style.background = "blue";
});

// Exemplo de posição do mouse na página
const conteudo = document.querySelector(".conteudo");


document.addEventListener("mousemove", handlePosicao);

function handlePosicao(evento) {
    conteudo.innerHTML = "X: " + evento.clientX + " " + "Y: " + evento.clientX;
}