/*Map
Tem como resultado um array com o mesmo tamanho do array inicial com
valores modificados.
É invocado a partir de um array e recebe como parâmetro uma função de
callback. que é invocada para cada item e retorna o valor do item 
equivalente no array resultante.
Não modifica o array original e sim retorna um novo array com os
valores resultantes do mapeamento. 
Sintaxe: arrayOriginal.map(callback)*/

//Ex01:
const nums = [1, 2, 3, 4, 5];
document.write(nums, "<br/>");

const mult = nums.map(value => value * 2);
document.write(mult, "<br/>");

const potencia = nums.map(value => Math.pow(value, 2));
document.write(potencia, "<br/>");

//Crie um map para printar apenas os valores país
const vencedores = [
  {
    nome: "Equipe Super",
    pais: "Brasil"
  },
  {
    nome: "Time Máximo",
    pais: "EUA"
  },
  {
    nome: "Mega Grupo",
    pais: "Canadá"
  }
];

const country = vencedores.map(value => value.pais);
document.write(country, "<br/>");

//Crie um map para printar apenas os valores "name".
const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog"
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog"
  },
  {
    name: "Red",
    age: 1,
    type: "cat"
  },
  {
    name: "Joey",
    age: 3,
    type: "dog"
  }
];

const nome = data.map(value => value.name);
document.write(nome, "<br/><br/>");

//Durations are in minutes - imprima name
const tasks = [
  {
    name: "Write for Envato Tuts+",
    duration: 120
  },
  {
    name: "Work out",
    duration: 60
  },
  {
    name: "Procrastination on Duolingo",
    duration: 240
  }
];

//Ex01 - Usando FOR
for (var i = 0; i < tasks.length; i++) {
  document.write(tasks[i].name, "<br/>");
}

//Ex02 - Usando MAP
const nomes = tasks.map(value => value.name);
document.write(nomes, "<br/>");

const dur = tasks.map(value => value.duration);
document.write(dur, "<br/>");
