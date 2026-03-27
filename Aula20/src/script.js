// Estudando propagação de eventos
const div1 = document.querySelector(".div1");
const p1 = document.querySelector(".p1");
const div2 = document.querySelector(".div2");
const p2 = document.querySelector(".p2");

p1.addEventListener("click", () => {
    alert("Você clicou no elemento rosa.");
}, false);

div1.addEventListener("click", () => {
alert("Você clicou no elemento roxo.");
}, false);

p2.addEventListener("click", () => {
    alert("Você clicou no elemento rosa.");
}, true);

div2.addEventListener("click", () => {
    alert("Você clicou no elemento roxo.");
}, true);

