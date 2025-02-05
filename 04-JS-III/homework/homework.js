// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  var nuevoArray = array;
  return nuevoArray[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var nuevoArray = array;
  return nuevoArray[nuevoArray.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var nuevoArray = array;
  return nuevoArray.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var nuevoArray = array;
  for (let i = 0; i < nuevoArray.length; i++) {
    nuevoArray[i] += 1;
  }
  return nuevoArray;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  var nuevoArray = array;
  nuevoArray.push(elemento);
  return nuevoArray;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  var nuevoArray = array;
  nuevoArray.unshift(elemento);
  return nuevoArray;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var nuevoArray = palabras;
  var frase = nuevoArray.join(" ");
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var nuevoArray = array;
  for (let i = 0; i < nuevoArray.length; i++) {
    if (nuevoArray[i] === elemento) {
      return true;
    }
  } return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var nuevoArray = numeros;
  var suma = 0;
  for (let i = 0; i < nuevoArray.length; i++) {
    suma += nuevoArray[i];
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var nuevoArray = resultadosTest;
  var promedio = 0;
  var suma = 0
  for (let i = 0; i < nuevoArray.length; i++) {
    suma += nuevoArray[i];
    promedio = suma / nuevoArray.length;
  }
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var nuevoArray = numeros;
  var masGrande = Math.max(...nuevoArray);
  return masGrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var resultMultiplicacion = 1;
  if (arguments.length === 0) {
    return 0;
  } else if (arguments.length === 1) {
    return arguments[0];
  }
  for (var i = 0; i < arguments.length; i++) {
    resultMultiplicacion = resultMultiplicacion * arguments[i];
  }
  return resultMultiplicacion;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var nuevoArray = arreglo;
var mayor = 0;
for (let i = 0; i < nuevoArray.length; i++) {
    if (nuevoArray[i] > 18) {
      mayor++;
    };
  }
  return mayor;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if (numeroDeDia == 1 || numeroDeDia == 7) {
    return "Es fin de semana";
  } else if (numeroDeDia > 1 && numeroDeDia < 7) {
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n.toString()[0] === "9") {
    return true;
  } else {
    return false;
  }
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  var nuevoArray = arreglo;
  for (var i = 1; i < nuevoArray.length; i++) {
    if (nuevoArray[0] !== nuevoArray[i]) {
      return false;
    }
    return true;
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = array;
  var meses = [];
  for (var i = 0; i < nuevoArray.length; i++) {
    if (nuevoArray[i] === "Enero" || nuevoArray[i] === "Marzo" || nuevoArray[i] === "Noviembre") {
      meses.push(nuevoArray[i]);
    }
  }
  if (meses.length === 3) {
    return meses;
  } else {
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var mayores = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      mayores.push(array[i]);
    }
  }
  if (mayores.length < 100) {
    return mayores;
  }
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var i = 0;
  var array = [];
  var suma = 0;
  do {
    suma = numero += 2;
    array.push(suma);
    i++;
    if (suma === 10) {
      return "Se interrumpió la ejecución";
    }
  } while ( i < 10 );
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var i = 0;
  var array = [];
  var suma = 0;
  do {
    suma = numero += 2;
    array.push(suma);
    i++;
    if (i == 5){
      i = 6
      continue;
    }
  } while ( i < 10 );
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
