//Exemplo de condição Lógica:If Else If
let y = 2;

if (y > 3) {
  console.log("A variável y é maior que 3!");
} else if (y == 3) {
  // console.log('A variável y é igual a 3');
} else {
  console.log("A variável y possui um valor diferente das verificações.");
}

//Exemplo de If
const elemento = document.getElementById("ex1");
const pegarHoras = new Date().getHours();
const pegarMinutos = new Date().getMinutes();
const hora = String(pegarHoras) + ":" + String(pegarMinutos);

if (pegarHoras > 18) {
  elemento.innerHTML = "Boa Noite!";
}

//Exemplo if 2
let idade = 18;
let texto = 'Você é novo demais para digirir!';

if (idade >= 18){
    texto = 'Você tem idade para dirigir!';

}

document.getElementById('ex2').innerHTML = texto;
