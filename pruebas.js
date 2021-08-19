//suma
console.log(5 + 5);
//resta
console.log(95 - 36);
//multiplicacion
console.log(985 * 852);
//division
console.log(8000 / 8);
//modulo
console.log(81 % 2);
//incremento
let numero = 8;
console.log(++numero);
//decremento
let otro_numero = 8;
console.log(--otro_numero);

//Operadores de comparacion
//Comparacion Simple == si un valor es igual a otro, ej.(5==7) = true
//Comparacion Estricta == si es valor es el igual a otro y sin son del mismo tipo de dato,(5==="5") = false

//Desigualdad simple y estricta
//5!="5"; false. solo preguta por el valor.Y el valor no es distinto.
//5!=="5"; true.Pregunta por el valor y tipo de dato. Valor es igual pero el tipo de dato no

//Operador que pregunta si ...
// 5>3 true , 15>=26 false , 4<20 true, 4<=2 false

//comparacion simple
console.log(9 == "9");
console.log(6 == 8);
//comparacion estricta
console.log(90 === 90);
console.log(85 === "85");
//comparacion desigualdad simple
console.log(6 != "6");
console.log(5 != 8);
//comparacion desigualdad estricta
console.log(45 !== "45");
console.log(65 !== "35");
//mayor que
console.log(6 > 2);
console.log(6 > 6);
//mayor o igual que
console.log(56 >= 57);
console.log(959 < 956);

//operadores logicos and&& osea para que el resultado sea true ambas tienen que ser verdaderas sino sera falsa
let dia = "domingo";
let clima = "lluvia";
console.log(dia == "domingo" && clima == "sol");

// OR || sirve para pregutar varias sentencias a la vez, conque una sea verdadera todas seran true
console.log(false || true);

//Concatenacio ++ sirve para unir dos o mas cadenas de texto en una sola
let nombre = "leo";
let apellido = "gonz";
console.log(nombre + " " + apellido);
