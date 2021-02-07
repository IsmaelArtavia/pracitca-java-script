/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

var nombre = "casa";
var altura = 20;

var concatenacion = nombre + " " + altura;

//document.write(nombre + " " + altura);

if (altura >= 190) {
  datos.innerHTML += "eres alto";
} else {
  datos.innerHTML += "eres bajo";
}

//for (var i = 2000; i <= 2021; i++) {
//datos.innerHTML += "<h2>estamos en el año:  " + i;
//}

function MuestraMiNombre(nombre, altura) {
  var misDatos = `
<h1> Div principal </h1>
<h2> Mi nombre es: ${nombre}</h2>
<h3> mi altura es: ${altura}</h3>
`;
  return misDatos;
}

function imprimir() {
  var datos = document.getElementById("datos");
  datos.innerHTML = MuestraMiNombre("Gato Chayote", 45);
}

imprimir();

var simbolos = ["♥", "♠", "♦", "♣"];

//alert(simbolos[0]);

document.write("mostrar arrary con for");
document.write("</br>");
//for para mostrar
for (var i = 0; i < simbolos.length; i++) {
  document.write(simbolos[i]);
}
document.write("</br>");
document.write("mostrar arrat con funcion forEach:");
document.write("</br>");
///funcion que rmuestra paracido a un for
simbolos.forEach(function(simbolo) {
  document.write(simbolo);
});
//////////////////////
document.write("</br>");
document.write("mostrar array con funcion flecha");
document.write("</br>");
///////////funcion flecha
simbolos.forEach(simbolo => {
  document.write(simbolo);
});
