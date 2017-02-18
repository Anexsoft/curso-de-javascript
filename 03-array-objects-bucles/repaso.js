var array1 = [
    'Manzana', // 0
    'Pera',    // 1
    'Sandia',  // 2
    'Fresa'    // 3
];

// for(var i = 0; i < array1.length; i++) {
//     console.log(array1[i]);
// }

array1.forEach(function(x, i){
    console.log(x + ' pertenece al indice ' + i);
})