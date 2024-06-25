const footerSelector = document.querySelector("footer .container .columns-container");
const options_footer = [
    { title: 'Ofertas', linkTo: '', opts: ["Laptops", "Audio", "Auriculares", "microfono"] },
    { title: 'Como comprar', linkTo: '', opts: ["Formas de pago", "Envios", "Devoluciones"] },
    { title: 'Costos y tarifas', linkTo: '', opts: ["Impuestos", "Facturación"] },
    { title: 'Mis pedidos', linkTo: '', opts: ["Pedir nuevamente", "Lista de deseos"] },
    { title: 'Garantia', linkTo: '', opts: [] },
];

for (const option of options_footer) {
    const col = document.createElement("div"); 
    col.classList.add("col");  
    const ul = document.createElement("ul"); 
    const mainItem = document.createElement("li");
    mainItem.classList.add("col-main-item");
    const mainAnchor = document.createElement("a");
    mainAnchor.href = option.linkTo;
    mainAnchor.textContent = option.title;
    mainItem.appendChild(mainAnchor); 
    ul.appendChild(mainItem); 
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