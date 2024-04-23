const navSelector = document.getElementById("nav");

const options = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html" },
    { title: "Como comprar", linkTo: "./how.html" },
    { title: "Costos y tarifas", linkTo: "./taxs.html" },
    { title: "Mis pedidos", linkTo: "./orders.html" },
    { title: "Garantia", linkTo: "./warranty.html" },
];

for (let option of options) {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    
    anchor.textContent = option.title;
    anchor.href = option.linkTo;    //<a href="#">Ofertas</a>

    listItem.appendChild(anchor); //<li><a href="#">Ofertas</a></li>
    navSelector.appendChild(listItem);

    // <ul id="nav">
    //      <li><a href="#">Ofertas</a></li>
    //     <li><a href="#">Como comprar</a></li>
    // </ul>
}