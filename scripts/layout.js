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
    anchor.href = option.linkTo;

    listItem.appendChild(anchor);
    navSelector.appendChild(listItem);
}