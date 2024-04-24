
// ejercicio 1
// function captureText() {
//     console.log("capturado");
// }

// ejercicio 2

// Define la variable searchSelector para seleccionar el input de búsqueda
const searchSelector = document.querySelector('#search');

// Agrega un escuchador de eventos para el evento keyup en el input de búsqueda
searchSelector.addEventListener("keyup", captureText);

// Define la función captureText
function captureText(event) {
    //console.log("Tecla presionada");
      
    console.log("Tecla presionada:", event.key);
    console.log("Código de tecla:", event.keyCode);
    console.log("Valor actual del input:", event.target.value);
    console.log("Tipo de evento:", event.type);
    console.log("AltKey presionado:", event.altKey);
    console.log("ShiftKey presionado:", event.shiftKey);
    console.log("CtrlKey presionado:", event.ctrlKey);
    console.log("MetaKey presionado:", event.metaKey);
    console.log("Ubicación de la tecla:", event.location);
    console.log("Código de caracter:", event.charCode);
    console.log("Código Unicode:", event.charCode);
    console.log("Repetición de la tecla:", event.repeat);
    console.log(event)
}