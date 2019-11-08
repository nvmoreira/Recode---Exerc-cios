/*Rest Params
É uma variação do Spread operator. Se pensarmos no operador spread
como alguém que tira os elementos de uma caixa e espalha em outro
lugar, podemos dizer que o parâmetro rest faz o oposto: ele coleta
elementos espalhados e guarda em uma caixa
Também é escrito com reticências(...) e permite representar  um número
indefinido de elementos como um array.
Por fim, podemos também utilizar o parâmetro rest para representar um
número indefinido de argumentos em uma função variadica, ou seja, uma
função que recebe um número infinito de parâmetros.
Vamos criar com ele uma função que soma qualquer quantidade de números
e retorna o resultado*/

//Ex01:
function listAuthor(editora, ...autores) {
  document.write(editora, "<br/>");
  document.write(autores);
}

/*Agora é possível chamar a função listAuthor() com qualquer número de 
parâmetros:*/
listAuthor("Voz", " Tomás de Aquino", " Leonardo Boff", " Agostinho de Hipona");
document.write("<br/><br/>");

//Ex02:
function fun1(...valores) {
  document.write(valores.length, "<br/>");
}
fun1();
fun1(2, 3, 4, 5);
fun1(7, 8);
