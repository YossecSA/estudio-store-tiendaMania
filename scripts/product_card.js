class Product {
    constructor(nombre, precio, descripcion, imgSrc, alt, discount, taxPolicy) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.imgSrc = imgSrc;
        this.alt = alt;
        this.discount = discount;
        this.taxPolicy = taxPolicy;
    }
}

const products = [
    new Product(
        "Macbook Pro 15'4", "$1999", "Portátil Apple con pantalla Retina de 15.4 pulgadas", 
        "https://cdn.lifeofpix.com/368492/_w1800/368505/lifeofpix-368492368505.webp", "Macbook Pro", "10% de descuento", "Incluye impuestos"),

    new Product(
        "iPhone 13", "$1099", "iPhone 13 de 128GB en color azul", 
        "https://as2.ftcdn.net/v2/jpg/03/15/35/87/1000_F_315358716_iszRIy0AZqy5TNvPWIOFzMLDlil0Wt95.jpg", "iPhone 13", "5% de descuento", "Incluye impuestos"),

    new Product(
        "Samsung Galaxy S22", "$899", "Samsung Galaxy S22 con pantalla Dynamic AMOLED 2X de 6.6 pulgadas", 
        "assets/mock2.jpg", "Samsung Galaxy S22", "15% de descuento", "Incluye impuestos"),

    new Product(
        "Canon EOS R6", "$2499", "Cámara mirrorless Canon EOS R6 con sensor CMOS de 20.1 megapíxeles", 
        "assets/mock1.jpg", "Canon EOS R6", "8% de descuento", "Incluye impuestos"),

    new Product(
        "Xbox Series X", "$499", "Consola Xbox Series X con capacidad de 1TB", 
        "assets/mock2.jpg", "Xbox Series X", "No hay descuento", "Incluye impuestos"),

    new Product(
        "Nintendo Switch", "$299", "Consola Nintendo Switch con controles Joy-Con", 
        "assets/mock2.jpg", "Nintendo Switch", "20% de descuento", "Incluye impuestos")
];
function createCard(product) {
    return `
        <a href="/details.html" class="product-card">
            <img class="product-img" src="${product.imgSrc}" alt="${product.alt}" loading="lazy">
            <div class="product-info">
                <span class="product-title">${product.nombre}</span>
                <span class="product-description">${product.descripcion}</span>
                <div class="product-price-block">
                    <span class="price">${product.precio}</span>
                    <span class="discount">${product.discount}</span>
                </div>
                <div class="product-tax-policy">
                    ${product.taxPolicy}
                </div>
            </div>
        </a>
    `;
}

function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const product of arrayOfProducts) {
        productsTemplate += createCard(product);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
}

printCards(products, "products");