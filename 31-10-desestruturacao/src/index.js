/* Destructuring Assignment
Serve para iterar de forma facilitada os elementos de um array ou 
objeto */

//New array
const arr = ["Natália ", "Viveiros ", "RJ ", "Brasil "];

//Destructuring array
const [nome, sobrenome, cidade, pais] = arr;
document.write(nome, sobrenome, cidade, pais, "<br/>");

//New object
const data = {
  name: "Natália",
  surname: "Viveiros",
  city: "RJ",
  site: "nataliaviveiros.com",
  social: {
    twitter: "@natyviveiros",
    linkedin: "nataliaviveiros"
  }
};

//Padrão
/* const name = data.name;
document.write(name, '<br/>');

const surname = data.surname;
document.write(surname, '<br/>');

const twitter = data.social.twitter;
document.write(twitter, '<br/>'); */

/*Destructuring objects
{} = não pe um bloco lógico e sim a sintaxe do destructuring */

const { name, surname } = data;
document.write(name, surname, "<br/>");

const { linkedin } = data.social;
document.write(linkedin, "<br/>");

//Renomeando a variável linkedin
const { linkedin: LK } = data.social;
document.write(LK, "<br/>");

/*Definindo um valor default para uma variável que não existe e insere
este valor no objeto*/
const { estado = "Rio de Janeiro" } = data;
document.write(estado, "<br/>");

//React - similar ao destructuring
//import { react } from "react";

/*Crie uma forma de trocar os valores das 2 variáveis entre si 
"b" passe a ser o "a" e "a" passe a ser o "b" */
let a = 42;
let b = 21;
let c = a;
a = b;
b = c;
document.write("a = " + a, " b = " + b, "<br/>");

//Destructuring Swap
[a, b] = [b, a]
document.write("a = " + a, " b = " + b, "<br/>");
