// Utilizando o operador in 
const pessoa = {
  primeiroNome: "Stephanie",
  ultimoNome: "Cruz",
  idade: 20,
  pais: "Brasil",
}

let exIn = ("idade" in pessoa);

console.log(exIn);

// Criação de Objetos aninhados

const pessoa2 = {
  primeiroNomw: "Ester",
  segundoNome: "Almeida",
  carros: {
    carro1: "Porche",
     carro2: "Volkswagen",
      carro3: "Audi",
  },
  motos: {
    moto1: "Ducati",
    moto2: "Royal Enfield",
  },
  
}

let propriedadeMotos = "moto1";



console.log(pessoa2.carros.carro3);
console.log(pessoa2.carros["carro2"]);
console.log(pessoa2["carros"]["carro1"]);
console.log(pessoa2.motos[propriedadeMotos]);




