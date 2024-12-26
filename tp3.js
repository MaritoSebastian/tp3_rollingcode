//trabao Practico N 3 de java script
/* 1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo. */
/* 
 let Meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

document.write(' <div id="centrado"><h1 style= color>LISTA DE LOS MESES</h1>')
document.write('<ul>')
 for (let index = 0; index < Meses.length; index++) {
    document.write(`<li>${Meses[index]}</li>`)
    
} 
document.write('</ul></div>');  */
/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

-ostrar la longitud del arreglo.
-Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
-Añade en última posición la ciudad de París.
-Escribe por pantalla el elemento que ocupa la segunda posición.
-Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'. */

/* let Ciudades = [];
let ultima_posicion;
let ciudad = true;
while (true) {
  ciudad = prompt(
    "ingresa la ciudad y sepado por una coma el pais al que pertenece"
  );

  if (ciudad === null) {
    break;
  } */
//creo unas validadciones cpn if ternario en una sola linea
/* 
  Ciudades[Ciudades.length] = ciudad; //esto se puede hacer con array.push
  Ciudades.splice(1, 0, "Barcelona");
  Ciudades.push("paris");
}
console.log(Ciudades);

document.write(`<h1> el arreglo tiene ${Ciudades.length} elementos</h1>`);
document.write(
  `<ul>
    <li>el elmento en la primera osicion es ${Ciudades[0]}</li>
     <li>el elmento en la segunda posicion es ${Ciudades[1]}</li>
    <li>el elmento en la ultima posicion es ${
      Ciudades[Ciudades.length - 1]
    }</li>
    </ul>
    `
);
document.write(`<h1>ARREGLO DE CIUDADES</h1>`);
document.write("<ul> ");
for (let index = 0; index < Ciudades.length; index++) {
  document.write(`<li>${Ciudades[index]}.</li>`);
}
document.write("</ul>"); */

/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación. */
/* 
 let tiros = [];
let repetido = {};
let suma = 0;
let dado_1;
let dado_2;
const sumar = (a, b) => a + b;
for (let index = 0; index < 50; index++) {
  dado_1 = Math.floor(Math.random() * 6) + 1;
  dado_2 = Math.floor(Math.random() * 6) + 1;
  tiros[tiros.length] = sumar(dado_1, dado_2);
}
console.log(tiros);
for (let index = 0; index < tiros.length; index++) {
  let elemento = tiros[index];
  if (repetido[elemento]) {
    repetido[elemento]++;
  } else {
    repetido[elemento] = 1;
  }
}
console.log(repetido);

//armo la tabla con un for in
document.write('<h1>Lanzamientos de Dados</h1>');
 document.write('<table class="tabla_dados">'); document.write('<tr><th>Suma </th><th>Apariciones</th></tr>');
 for (let tiro in repetido) {
  document.write(`<tr><td>${tiro}</td><td>${repetido[tiro]}</td></tr>`); } document.write('</table>');  */

/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función */
/* 
 const Numero_control = (a) => {
  if (a % 2 === 0) {
    alert("el numero es para");
  } else {
    alert("el numero es impar");
  }
};

let numero = prompt("ingresa el numero maoyor a cero");
if (isNaN(numero) || numero <= 0) {
  alert("debes ingresar numero valido");
} else {
  Numero_control(numero);
} 
 */
/* 5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. */
/* function Verificacion(Cadena) {
  let Es_mayuscula = Cadena === Cadena.toUpperCase();
  let Es_minuscula = Cadena === Cadena.toLowerCase();
  if (Es_mayuscula && Es_minuscula) {
    alert("La cadena contiene tanto mayúsculas como minúsculas.");
    
  

  } else if (Es_mayuscula) {
    alert("tiene solo mayusculas");
  } else if (Es_minuscula) {
    alert("tiene solo minusculas");
  }
}

let Texto = prompt("ingresa la cadena de texto");
if (!isNaN(Texto) || Texto == null) {
  alert("debes ingresar un texto");
} else {
  Verificacion(Texto);
}  */
/* function Verificacion(Cadena) {
  let Es_mayuscula = Cadena === Cadena.toUpperCase();
  let Es_minuscula = Cadena === Cadena.toLowerCase();

  if (Es_mayuscula) {
    alert("La cadena solo contiene mayúsculas.");
  } else if (Es_minuscula) {
    alert("La cadena solo contiene minúsculas.");
  } else {
    alert("La cadena contiene una combinación de ambos caracteres.");
  }
}

let Texto = prompt("Ingresa la cadena de texto");

if (Texto === null || Texto.trim() === "" || !isNaN(Texto)) {
  alert("Debes ingresar un texto válido.");
} else {
  Verificacion(Texto);
} */
/* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:
Input:
lado A = 24
lado B = 5

Output: 58 */
/*   let Lado_l=parseInt(prompt("ingesa el valor del primer lado"))
let Lado_2=parseInt(prompt("ingesa el valor del 2 lado"))
const Perimetro=(lado_a,Lado_b)=> 2*(lado_a+Lado_b)
if (isNaN(Lado_l) || isNaN(Lado_2) || Lado_l<=0 || Lado_2<=0) {
  
  alert('debes ingesar un valor valido')
} else {
  alert(`el perimetro es ${Perimetro(Lado_l,Lado_2)}`)
  
}  */

/* 7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario */
let Numero = parseInt(prompt("ingresa el numero del que queres ver la tabla"));
let Resultado = 0;
let Tablas = [];
//cre la funcion
const multiplicar = (multiplicador) => {
  document.write('<table>')
  for (let index = 1; index <= 10; index++) {
    Resultado = multiplicador * index;

    Tablas.push(`${multiplicador} X ${index}=${Resultado}`);
  }

  return Tablas;
};

if (isNaN(Numero)||Numero<=0) {
  alert("debes ngresar un valor vlido");
} else {
  console.log(multiplicar(Numero));
  alert(Tablas.join("\n"));
}
