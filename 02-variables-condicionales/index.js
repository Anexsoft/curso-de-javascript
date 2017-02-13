var variable1 = 10,
    variable2 = 50,
    variable3 = "Soy una cadena", /* Tipo cadena */
    variable4 = true, /* Tipo boolean */
    operacion = variable1 * variable2;

// Concatenando cadenas
//console.log(variable3 + ' ' + 'concatenada');

// Incremento de variables
/*variable1++;
console.log(variable1); // Valor esperado: 11*/

/*
variable1--;
console.log(variable1);
*/

/*variable1 += 5;
variable1 -= 5;
variable1 *= 5;
variable1 /= 5;
console.log(variable1);*/

// typeof nos sirve para conocer el tipo de variable
//console.log(typeof(variable3));

// CONDICIONES
/*if(variable1 === '10') {
    console.log('Si es igual a 10');
} else {
    console.log('No cumple la condición');
}*/

// if(variable4) {
//     console.log('Cumple la condición');
// } else {
//     console.log('No cumple la condición');
// }

// if(variable1 === 10) {
//     console.log('Si es igual a 10');
// } else if(variable1 === 11) {
//     console.log('Si es igual a 11');
// } else {
//     console.log('No cumple la condición');
// }

switch(variable1) {
    case 10:
    console.log('Vale 10');
    break;
    case 11:
    console.log('Vale 11');
    break;
    case 12:
    console.log('Vale 12');
    break;
    default:
    console.log('Variable 1 no cumple ninguna condición');
    break;
}