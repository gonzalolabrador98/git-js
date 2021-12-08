// const arr = [1, 2, 3, 4, 5, 6];

// if (true) { //FOR IN recorre el indice del array
//   for (const array in arr) {
//     console.log(array);
//   }
// }

// if (true) { //FOR OF recorre los valores del array
//   for (const array of arr) {
//     console.log(array);
//   }
// }

// arr.push(7, 8, 9); //Agregar al final

// arr.unshift(-3, -2, -1, 0); //Agregar al principio

// const eliminadoPop = arr.pop(); //Elimina el ultimo elemento
// console.log("EliminadoPop = ", eliminadoPop); // Devuelve el elemento eliminado

// const eliminadoShift = arr.shift(); //Elimina el primer elemento
// console.log("EliminadoShift = ", eliminadoShift); // Devuelve el elemento eliminado

// const elminadoSplice = arr.splice(2); //Apartir de que punto se quiere elmimnar los elementos
// console.log("EliminadoSplice = ", elminadoSplice);

// const elminadoSplice2 = arr.splice(2, 4); //Apartir de que punto se quiere eliminar y cuantos elementos se quieren eliminar
// console.log("EliminadoSplice2 = ", elminadoSplice2);

// const elminadoSplice3 = arr.splice(3, 1, 100); //Elimina el elemento 3 y agrega un 100 en su lugar
// console.log("EliminadoSplice3 = ", elminadoSplice3);

// const elminadoSplice4 = arr.splice(1, 0, 100); //Agrega un 100 en la posición indice 1
// console.log("EliminadoSplice4 = ", elminadoSplice4);

// arr.forEach((element) => {
//   //Solo recorre el array y element es cada elemento de ese array, no devuelve un valor como el MAP
//   console.log(element);
// });

// arr.sort(); //ordena el array de forma acendente, al ultimo los strings

// arr.reverse(); //Ordena el array de forma decendente, al principio los strings

// const findArray = arr.find((element) => {
//   //Encuentra el primer elemento del array que cumple con la condicion que pongamos
//   return element > 3;
// });
// console.log(findArray);

// const mapArray = arr.map((element) => { //Retorna un nuevo array realizando la funcion que indiquemos
//   return element * element;
// });
// console.log(mapArray);

// const filterArray = arr.filter((element) => { //Returna un nuevo array filtrando los elementos en base a lo que indiquemos en la funcion
//   return element < 3;
// });
// console.log(filterArray);

// var declara una variable de scope global o local para la función
// sin importar el ámbito de bloque. Permite hoisting.

// let declara una variable de scope global, local para la función
// o de bloque. Es reasignable y no permite hoisting.

// const declara una variable de scope global, local para la función
// o de bloque. No es reasignable, pero es mutable. No permite hoisting.

// var i = 1;
// if (true) {
//   var i = 2;
//   console.log("var", i);
// }
// console.log("var", i);

// let b = 1;
// if (true) {
//   b = 2;
//   console.log("let", b);
// }
// console.log("let", b);

// const c = 1;
// if (true) {
//   const c = 2;
//   // c = 2; NO SE PUEDE HACER CON CONST
//   console.log("const", c);
// }
// console.log("const", c);

// const hola = () => {}; //typeof, devuelve el tipo de la variable

// console.log(typeof hola === "string");

//el this en las funciones regulares toma el contexto de la funcion que se mando a llamar
// arrow function: no se les asigna un this propio sino que heredan el this del contexto
// superior, que estando dentro del contexto del objeto persona, this hace referencia
// al objeto  window.

// el arrow function no tiene nombre, por lo tanto es una funcion anonima

//Una expresión de función flecha es una alternativa compacta a una expresión
//  de función tradicional, pero es limitada y no se puede utilizar en todas las
//  situaciones. Diferencias y limitaciones: No tiene sus propios enlaces a this
//  o super y no se debe usar como métodos. No tiene argumentos o palabras clave new.

//Metodos para seleccionar elementos del DOM de la pagina:
// document.querySelector(".buttons"); //selecciona todos las clases "buttons"
// document.querySelector("#hola"); //selecciona todos los id con ese nombre

// document.getElementById("hola"); //selecciona todos los id con ese nombre
// document.getElementsByTagName("div"); //selecciona todos los div del DOM
// document.getElementsByClassName("buttons"); //seleccina todas las clases buttons
// document.getElementsByName("gonza"); //selecciona todos los elementos que tengan name='gonza'

// localStorage.setItem("array", JSON.stringify(arr)); // Cargar un objeto o array en el localStorage

// Un callback es una funcion que lleva otra funcion comoo parametro de modo de que le
// pueda indicar cuando la primera funcion termino para que se ejecute

// Una promesa es un valor que puede estar disponible ahora, en un futuro o nunca.

// function llegar() {
//   console.log("llegar");
// }

// function esperar() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("esperar"));
//     }, 1000);
//   });
// }

// function irse() {
//   console.log("irse");
// }

// async function main() {
//   try {
//     llegar();
//     await esperar();
//     irse();
//   } catch (err) {
//     console.log(err);
//   }
// }

// main();

// El async / await sirve para esperar que termine el codigo asincrono para continuar con la ejecucion

//GIT es un sistema de control de versiones (VCS)
// ES UN SISTEMA QUE CONTROLA O ADMINISTRA LAS DISTINTAS
// VERSIONES DE UN PROGRAMA.
// git init //crea un nuevo directorio en el path
// git add . //toma todos los archivos y los prepara para un commit o snapshot
// git reset . //devuelve los archivos tomados por el add
// git commit -m "Primer Commit" // toma la snapshot para subirlo
// git checkout -- . // trae el codigo del ultimo commit por si se elimino algo sin querer
// git log //listado de los commits
// git commit --amend // arregla el nombre del ultimo commit
// wq! // luego de arreglar el nombre
// git checkout -branch rama-js

// console.log("Array final = ", arr);
