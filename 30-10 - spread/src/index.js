/*Spread Operator - Trabalham com elementos que são iteráveis
(array, string, Object) e desmembra-los em pequenas partes. Permite
que expressões expandam o conteúdo de arrays em locais onde 
múltiplos elementos são esperados.
Pense no operador spread como alguém que tira os elementos de
uma caixa e espalha em outro lugar, */

//Exe-01.:
document.write([..."Natália"]);
document.write("<br/><br/>");

//Imprimindo um array
let frontend = ["react ", "angular ", "vue "];
document.write(frontend);
document.write("<br/><br/>");

//Imprimindo usando o operador spred
document.write(...frontend);
document.write("<br/><br/>");

/*Note que neste caso eu não usei o Spread. Ao colocar o array dentro
 de outro array  */
let middle = [3, 4];
let arr = [1, 2, middle, 5, 6];
document.write(arr);
document.write("<br/><br/>");

/*Agora experimente colocar ‘…’ antes do array middle para você ver
o que acontece, como abaixo:*/
let middle02 = [3, 4];
let arr02 = [1, 2, ...middle02, 5, 6];
document.write(arr02);
document.write("<br/><br/>");

/*Spread significa espalhar, ou seja, este operador é usado para ‘espalhar’
os elementos de um array quando interpretado em tempo de execução.
Neste último caso, os itens de middle foram espalhados dentro de arr. */

//Quiz #1 – Cópia de arrays com Spread
let alfabeto = ["a", "b", "c"];
document.write(alfabeto);
document.write("<br/><br/>");

let arr03 = alfabeto;
document.write(arr03);
document.write("<br/><br/>");

const a = alfabeto === arr03;
document.write(a, "<br/>");

/*Não é uma cópia do array alfabeto, mas sim o próprio array alfabeto,
uma vez que a referência de memória de ambos é a mesma. Como provar isso?*/
alfabeto.push("d");
document.write(arr03);
document.write("<br/><br/>");

document.write(alfabeto);

//Criando uma cópia do array.
let caracteres = ["a", "b", "c"];
let arr04 = [...caracteres];
document.write(arr04);
document.write("<br/><br/>");

const b = caracteres === arr04;
document.write(b);
document.write("<br/><br/>");

//Segredo #2 – Concatenação de arrays com Spread
let letras = ["a", "b", "c"];
let letter = ["d", "e", "f"];

//Antes, sem usar o  Spread Operator - método concat
let c = letras.concat(letter);
document.write(c);
document.write("<br/><br/>");

//Quiz 02 - Iserindo um novo elemento dentro da concatenação
let d = [...letras, "RJ", ...letter];
document.write(d);
document.write("<br/><br/>");

//Segredo #3 – String para Array
let str = "hello";
let chars = [...str];
document.write(chars);
