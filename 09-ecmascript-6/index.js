/*
     ECMAScript 6, desarrollado por Anexsoft
*/

/* ¿Qué es? */
// Es una especificación de Lenguaje para que cada navegador pueda implementar
// javascript y no haya problemas de compatibilidad (en teoría);

/* Variables tipo LET */
    // if(true) {
    //     let a = 1;
    // }

// console.log(a);

/* Operador Arrow */
    // ES 5
    // [1,2,3].forEach(function(x) {
    //     console.log(x);
    // })

    // ES 6
    // [1,2,3].forEach(x => {
    //     console.log(x);
    // })

    // [1,2,3].forEach((x, i) => {
    //     console.log(i);
    // })

/* Parámetros por defecto */
// function diAlgo(x = 'Carla') {
//     // x = (x || 'Carla');
//     return 'Algo:' + x;
// }

/* Parámetros tipo REST */
// function dameDeComer(...comida) {
//     return 'Estoy comiendo:' + comida.join(', ');
// }

/* Templates */
// function template(obj) {
//     // return 'Hola ' + obj.nombre + ', usted es: ' + obj.profesion;
//     return `Hola ${obj.nombre}, usted es: ${obj.profesion}`;
// }

/* Declaración rápida de objetos sin especificar el Key */
// let nombre = 'Eduardo',
//     profesion = 'Músico';

// let obj = {
//     nombre,
//     profesion,
//     ['a' + (function (){ return 1 })()]: 'Algo' 
// };

/* Metodos declarados como propiedades */
var obj = {
    // diAlgo: function() {
    //     return 'Algo ..';
    // }
    diAlgo() {
        return 'Algo ..';
    }
};