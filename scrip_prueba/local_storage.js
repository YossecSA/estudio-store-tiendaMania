//almacenar informacion
localStorage.setItem('nombres', '[juan, carlos]');

//Recupera el valor asociado a una clave especificada. -consola
let info = localStorage.getItem('nombres');
console.log(info)

let s = { nombre: "Juan", edad: 30 , img: ['img1','img2','img3','img4','img5','img6']};


localStorage.setItem('usuario', JSON.stringify(s));


let usuario = JSON.parse(localStorage.getItem('usuario'));
console.log(usuario.nombre); // "Juan"