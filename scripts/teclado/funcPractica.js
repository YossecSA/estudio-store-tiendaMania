// eventos de prueba

var inputNombre = document.getElementById("search");
inputNombre.addEventListener("keyup", function() {
    console.log(  inputNombre.value);
});
const products_prueba = [
    { id: 1, name: 'Product A', price: 50 },
    { id: 2, name: 'Product B', price: 100 },
    { id: 3, name: 'Product C', price: 75 },
    { id: 4, name: 'Product D', price: 120 },
    { id: 5, name: 'Product E', price: 80 }
];

//  La función filter() en JavaScript se utiliza para crear un nuevo array con 
// todos los elementos que pasan ciertas condiciones proporcionadas por una función de prueba.

const cheapProducts = products_prueba.filter( function(productos){
    console.log(productos.name)
});
// const cheapProducts2 = products_prueba.filter( (productos) => {
//     console.log(productos)
// });

// const buscar = products_prueba.filter(productos => productos.price == 100)

// console.log(buscar)

// console.log(cheapProducts);