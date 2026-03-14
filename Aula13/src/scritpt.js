// Array global
const frutas = ["Morango", "Abacaxi","Acelora", "Manga"];

// Utilizando a propriedade length()

 //let tamanhoFrutas = frutas.length

 //frutas.length = 2


console.log(frutas);

// Utilizando o método toString
let minhasFrutas = frutas.toString();


console.log(minhasFrutas);

// Utilizando o método at()
let itemFrutas = frutas.at(2);
let itemFrutas2 = frutas.at[1];

console.log(itemFrutas);
console.log(itemFrutas2);

//  Utilizando o método join()
let apresentacaoFrutas = frutas.join(" , ");
console.log(apresentacaoFrutas);

// Utilizando o método pop()
let removerItemFrutas = frutas.pop();
console.log(removerItemFrutas);

// Utilizando o método push()
let adicionarItemFrutas = frutas.push(" Limão");
console.log(frutas);
console.log(adicionarItemFrutas);

// Utilizando o método shift()
let deslocarItemsFrutas = frutas.shift();
console.log(frutas);
console.log(deslocarItemsFrutas);

// Utilizando o método unshift()
let deslocarItemsFrutas2 = frutas.unshift("Melão");
console.log(frutas);
console.log(deslocarItemsFrutas2);

frutas[0] = "Kiwi";

console.log(frutas);

// Utilizando a propriedade length
frutas[frutas.length] ="Laranja";

console.log(frutas);


// Utilizando o método isArray()
console.log(Array.isArray(frutas));

// Utilizando o método delete()
// delete frutas[0];
// delete frutas[4];

frutas[0] = "Abacate";
console.log(frutas);

// Utilizando o método concat()
const motos = ["Hornet", "Ducati", "Yamaha"];
const carros = ["Gol", "Onix", "Marea"];

const veiculos = motos.concat(carros);

console.log(veiculos);


// Utilizando o copiwithin()
// let copiaItems = frutas.copyWithin(2,0);
console.log(frutas);

// Exemplo de matriz em JavaScript
// const matriz = [
//  [1, 2],
//  [3, 4],
//  [5, 6]
// ];

const matriz = [[1, 2],[3, 4],[5, 6]];

console.log(matriz[0][0]);

// Exemplo de vetor em JavaScript (array unidimensional)
const comida = ["Pizza","Arroz", "Macarrão"];

// Utilizando o métodoflat()
const listaNumeros = [[1, 2], [3, 4], [5, 6]];
const novaListaNumeros =  listaNumeros.flat();

console.log(listaNumeros);
console.log(novaListaNumeros);

// Utilizando o flatMap()
const listaNumero2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const novaListaNumeros2 = listaNumero2.flatMap((item) => {
  return [item, item * 10];
});

console.log(novaListaNumeros2);

// Utilizando o método splice()
console.log(frutas);
const novaListaFrutas = frutas.splice(2, 0, "Pêra", "Carambola");
//console.log(frutas);

// Utilizanso o tospliced()
console.log(frutas);
const frutasToSpliced = frutas.toSpliced(0, 0);
console.log(frutasToSpliced);

// Utilizando o slice()
const copiaFrutas = frutas.toSpliced(0, 0);

 const frutasSlice = copiaFrutas.slice(2);

console.log(frutasSlice);

const frutasSlice2 = copiaFrutas.slice(1, 4);

console.log(frutasSlice2);




























