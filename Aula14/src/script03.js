// Utilizando o método forEach()
const elemento = document.querySelector(".ex1");
const numeros = [45, 4, 9, 16, 25];

let texto = "";
function apresentaItem (item) {
   texto = texto + item + "<br>";
}

numeros.forEach(apresentaItem);

elemento.innerHTML = texto;


// Utilizando o método map()
const elemento2 = document.querySelector(".ex2");
const numeros2 = [45, 4, 9, 16, 25];

let texto2 = "";
function apresentaItemMultiplicado
(item) {
 texto2 = texto2 + item * 2 + "<br>";
}

const numerosNovo = numeros2.map(apresentaItemMultiplicado);

elemento2.innerHTML = texto2;

// Utilizando o método flatMap()
const elemento3 = document.querySelector(".ex3");
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let texto3 = "";
function ocorrenciaFlatMap(item) {
    texto3 +=  item +  " | "  + item * 10 + "<br>"
}

const numero3Novo = numeros3.flatMap(ocorrenciaFlatMap);

elemento3.innerHTML = texto3;

// Utilizando o método filter()
const elemento4 = document.querySelector(".ex4");
const numeros4 = [45, 4, 9, 16, 25];

let texto4 = "";
function maioresQue20 (item) {
  return (item > 20);
}    

const novoNumeros4 = numeros4.filter(maioresQue20);
 
elemento4.innerHTML = novoNumeros4.join("<br>");

// Utilizando o reduce()
const elemento5 = document.querySelector(".ex5");
const numeros5 = [45, 4, 9, 16, 25];

function somarItems(acumulador, item) {
    return acumulador + item;
}

let resultadoSoma = numeros5.reduce(somarItems);

elemento5.innerHTML = resultadoSoma;

// Utilizando o método every()
const elemento6 = document.querySelector(".ex6");
const numeros6 = [45, 4, 9, 16, 25];

function verificaTodosMaioresQue20 (item) {
    return item > 20
}

let todosMaioresQue20 = numeros6.every(verificaTodosMaioresQue20);


elemento6.innerHTML = todosMaioresQue20;

// Utilizando o some()
const elemento7 = document.querySelector(".ex7");
const numeros7 = [45, 4, 9, 16, 25];

function verificaAlgunsMaioresQue20(item) {
    return item > 20; 
}

let algunsMaioresQue20 = numeros7.some(verificaAlgunsMaioresQue20);

elemento7.innerHTML = algunsMaioresQue20;

// Utilizando o método Array.from()
let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const alfabetotoArray = Array.from(alfabeto);

console.log(alfabetotoArray);

const ids = [1,2, 3, 4, 5, 6, 7, 8, 9,10];
const idsArray = Array.from(ids,(item) => item * 10);

console.log(idsArray);

// Utilizando o método keys()
const frutas = ["Uva","Laranja", "Tangerina"];
const frutasKeys = frutas.keys();

let texto5 = "";
for (let item of frutasKeys) {
    texto5 += item + "<br>"
}

document.querySelector(".ex8").innerHTML = texto5;

