//Exemplo 01 - declarar variáveis
let car01 = "fiat";
let car02 = "volvo";
let car03 = "BMW";
/*document.write(car01);
document.write(car02);
document.write(car03);*/

/*Arrays
Um array é útil pois armazena múltiplos valores em uma única e organizada
estrutura de dados. Você pode definir um novo array listando valores
separados por vírgulas entre colchetes []
Obs: Princípio básico de estrutura de dados.*/

const cars = ["fiat", "volvo", "BWM"];
//document.write(cars);

const artistas = ["Madonna", "Christina Aguilera", "Robyn"];
//document.write(artistas);

//Array aninhado
const arraysInArrays = [
  [1, 2, 3],
  ["joão", "michel"],
  [true, false, true, false]
];
//document.write(arraysInArrays);

/*Indexação
Lembre-se de que os elementos de um array são indexados começando
na posição 0. Para acessar um elemento em array use o nome do array
imediatamente seguido pelos colchetes contendo o índice do valor que
você deseja acessar.*/

const frutas = ["banana", "maçã", "mamão"];
/* document.write(frutas[0]);
document.write(frutas[1]);
document.write(frutas[2]);*/

/*Se desejar mudar o valor de um elemento em um array, você pode fazê-lo
definindo-o como igual a um novo valor.*/
frutas[2] = "morango";
//document.write(frutas);

//Também é possível acrescentar um valor ao array.
frutas[3] = "uva";
//document.write(frutas);

//Quando não existe um valor correspondente ao índice o retorno é undefined
//document.write(frutas[4]);

/*Quiz: O preço está certo(6-3):
Instruções:
Iniciando com esta array de prices, altere o preço do 1º, 3º e 7º 
elementos na array. 
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

DICA: o 1º elemetno de qualquer array possui como índice o 0.
Depois, imprima a array prices. */

const prices = [1.23, 48.11, 90.11, 8.5, 9.99, 1.0, 1.1, 67.0];
prices[0] = 2.5;
prices[2] = 3.67;
prices[6] = 89.1;
//document.write(prices);

/* Métodos e propriedades dos arrays:
O Javascript fornece um grande número de métodos embutidos para
modificar arrays e acessar valores dentro dele. Veja a documentação
no MDN ou digite []. no console do Javascript para ver uma lista de
todos os métodos para array disponíveis */

//Comprimento: length
const sobremesa = ["manjar", "pavê", "pudim"];
//document.write(sobremesa.length);

const inventory = [["gold pieces", 25], ["belt", 4], ["ring", 1], ["shoes", 2]];
//document.write(inventory.length);

/* Push:
Quer dizer que você pode encontrar o tamanho de um array. Mas e se for
necessário modificar um array?
Felizmente, arrays possuem muitos métodos embutidos para adição e 
remoção de elementos. Os dois métodos mais comuns para modificação
de um array são push e pop.

Push - adiciona elementos no fim de um array */

const queijos = ["mussarela", "minas", "provolone", "parmesão", "cheddar"];
queijos.push("gorgonzola");
//document.write(queijos);

// Pop - remove elementos no fim de um array
queijos.pop();
//document.write(queijos);
queijos.splice(1, 0, "prato");
//document.write(queijos);

/*************DESAFIO *******************/
/* Quiz: Cores do arco-iris:
Instruções:
James estava criando uma array com as cores do arco-íris, e ele
esqueceu algumas cores. As cores padrão de um arco-íris são 
normalmente listadas nesta ordem:

const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

mas James tinha isto:
const rainbow = ["Red", "Orange", "Blackberry", "Blue"];

Usando somente o método splice(), insira as cores que faltam na array e 
remova a cor "Blackberry", seguindo estes passos:

1.Remova "Blackberry"
2.Adicione "Yellow" e "Green"
3.Adicione "Purple"*/

const rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(5, 0, "Purple");
document.write(rainbow);
