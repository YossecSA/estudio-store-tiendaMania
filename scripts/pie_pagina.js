
// seleccionamos la seccion
const footerSelector = document.querySelector("footer .container .columns-container");

const options_footer = [
    { title: 'Ofertas', linkTo: '', opts: ["Laptops", "Audio", "Auticulares"] },
    { title: 'Como comprar', linkTo: '', opts: ["Formas de pago", "Envios", "Devoluciones"] },
    { title: 'Costos y tarifas', linkTo: '', opts: ["Impuestos", "Facturación"] },
    { title: 'Mis pedidos', linkTo: '', opts: ["Pedir nuevamente", "Lista de deseos"] },
    { title: 'Garantia', linkTo: '', opts: [] },
];


for (const option of options_footer) {
    const col = document.createElement("div"); 
    col.classList.add("col");   // crea el contenedor de clase col

    const ul = document.createElement("ul");    //crea el contenedor ul

    const mainItem = document.createElement("li");  //crea el contenedor li
    mainItem.classList.add("col-main-item");    // le asigna la clase 

    const mainAnchor = document.createElement("a"); //crea una lista
    mainAnchor.href = option.linkTo;
    mainAnchor.textContent = option.title;
    mainItem.appendChild(mainAnchor); // le asigna la etiqueta 'a' a li
    ul.appendChild(mainItem); //le asigna li a ul

    //con esto ya creamos
//      <div class="col">
    //     <ul>
    //         <li class="col-main-item"><a href="#">ofertas</a></li>
    //     </ul>
//     </div>


    for (const opt of option.opts) {
        if (opt !== "") {
            const li = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = "#"; // Set your link here
            anchor.textContent = opt;
            li.appendChild(anchor);
            ul.appendChild(li);
        }
    }

    col.appendChild(ul);
    footerSelector.appendChild(col);
}