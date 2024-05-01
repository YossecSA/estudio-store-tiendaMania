class Product {
    constructor(id,nombre, precio, descripcion, alt, discount, taxPolicy, colors,images) {
        this.id=id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.alt = alt;
        this.discount = discount;
        this.taxPolicy = taxPolicy;
        this.colors = colors;
        this.images = images;
    }
}

const products = [
    new Product(
        "A120","Macbook Pro 15'4", "$1999", "Portátil Apple con pantalla Retina de 15.4 pulgadas"
        , "Macbook Pro", "10% de descuento", "Incluye impuestos",["Negro", "Azul Marino", "Guinda"], 
        ["https://cdn.lifeofpix.com/368492/_w1800/368505/lifeofpix-368492368505.webp", "./assets/mock2.jpg"]),

    new Product(
        "A121","iPhone 13", "$1099", "iPhone 13 de 128GB en color azul", 
        "iPhone 13", "5% de descuento", "Incluye impuestos",["Rojo", "Gris", "Plateado"], 
        ["https://as2.ftcdn.net/v2/jpg/03/15/35/87/1000_F_315358716_iszRIy0AZqy5TNvPWIOFzMLDlil0Wt95.jpg", "./assets/mock2.jpg"]),

    new Product(
        "A122","Samsung Galaxy S22", "$899", "Samsung Galaxy S22 con pantalla Dynamic AMOLED 2X de 6.6 pulgadas", "Samsung Galaxy S22", "15% de descuento", "Incluye impuestos"
        ,["Rojo", "Gris", "Plateado"], ["https://cdn.lifeofpix.com/113763/_w1800/308028/lifeofpix-rawpixelcom1624-308028.webp",
        "https://cdn.lifeofpix.com/113763/_w1800/307997/lifeofpix-rawpixelcom1624-307997.webp"]),

    new Product(
        "A123","Canon EOS R6", "$2499", "Cámara mirrorless Canon EOS R6 con sensor CMOS de 20.1 megapíxeles", 
        "Canon EOS R6", "8% de descuento", "Incluye impuestos",["Rojo", "Gris", "Plateado"],  ["./assets/mock1.jpg", "./assets/mock2.jpg"]),

    new Product(
        "A124","Xbox Series X", "$499", "Consola Xbox Series X con capacidad de 1TB", 
        "Xbox Series X", "No hay descuento", "Incluye impuestos",["Rojo", "Gris", "Plateado"],  ["./assets/mock1.jpg", "./assets/mock2.jpg"]),

    new Product(
        "A125", "Nintendo Switch", "$299", "Consola Nintendo Switch con controles Joy-Con", 
        "Nintendo Switch", "20% de descuento", "Incluye impuestos",["Rojo", "Gris", "Plateado"],  ["https://cdn.lifeofpix.com/350304/_w1800/365043/lifeofpix-noahbietrix-365043.webp", "https://cdn.lifeofpix.com/298717/_w1800/310907/lifeofpix-nicoletarazi-310907.webp"])
];


// obtener el ID del http
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(id);

function printDetails(id) {
    const product = products.find((each) => each.id === id);
    const detailsTemplate = `
    <div class="product-images-block">
        ${product.images.map((image, index) => `
            <div class="thumbnail-container">
                <img src="${image}" alt="Descripción de la imagen" onclick="cambioImagen('${image}')"/>
            </div>
        `).join("")}
        <img class="main-image" src="${product.images[0]}" alt="" id="bigImg">
    </div>
    <div class="product-description-block">
        <h1 class="title">${product.nombre}</h1>
        <form class="selector">
            <label class="label subtitle" >Color</label>
            <fieldset>
                <select type="text" placeholder="Selecciona un color" id="color">
                    ${product.colors.map(
                    (each) => `<option value=${each}>${each}</option>`
                    ).join("")}
                </select>
            </fieldset>
        </form>
        <div class="description-detail">
            <span class="subtitle">Descripción</span>
            <p>${product.descripcion}</p>
        </div>
    </div>
    <div class="product-checkout-block">
        <div class="checkout-container-product">
            <span class="checkout-total-label">Total:</span>
            <h2 class="checkout-total-price" id="subtotal">${product.precio}</h2>
            <p class="checkout-description">
                Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 507 haciendo la solicitud en AFIP.
            </p>
            <ul class="checkout-policy-list">
                <li>
                <span class="policy-icon"
                    ><img src="./assets/truck.png" alt="Truck"
                /></span>
                <span class="policy-desc"
                    >Agrega el producto al carrito para conocer los costos de envío</span
                >
                </li>
                <li>
                <span class="policy-icon"
                    ><img src="./assets/plane.png" alt="Plane"
                /></span>
                <span class="policy-desc"
                    >Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
                    envío normal</span
                >
                </li>
            </ul>
            <div class="checkout-process">
                <div class="top">
                <input type="number" value="1" min="0"  onchange="changeSubtotal(this.value)" id="quantity"/>
                <button class="btn-primary" id="btn_agregar">Añadir</button>
                </div>
            </div>
        </div>
    </div>
    `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
}
// Función para cambiar la imagen grande (bigImg)
function cambioImagen(nuevaImagen) {
    const bigImg = document.getElementById('bigImg');
    bigImg.src = nuevaImagen;
}
// Función para cambiar el subtotal según la cantidad seleccionada
function changeSubtotal(quantity) {

    quantity = parseInt(quantity);

    // Usamos el Id que tenemos en la URL}const query = location.search;
    // const params = new URLSearchParams(query);
    // const id = params.get('id');
    // console.log(id);

    const product = products.find((each) => each.id === id);

    const subtotal = quantity * parseFloat(product.precio.replace('$', '').replace(',', ''));

    const subtotalElement = document.getElementById('subtotal');

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
}


printDetails(id)

// Obtener el botón por su ID
var button_agregar = document.getElementById("btn_agregar");

// Añadir un evento de clic al botón
button_agregar.addEventListener("click", function() {
    saveProduct(id);
});

function saveProduct(id) {
    const found = products.find((each) => each.id === id);

    // Crear un objeto con los detalles del producto
    const product = {
        id: found.id,
        title: found.title,
        price: found.price,
        color: document.querySelector("#color").value,
        quantity: document.querySelector("#quantity").value,
    };

    // Para la primera vez se necesita indicar q si no existe q sea un array vacio
    let cart = JSON.parse(localStorage.getItem("cart")) || []; 

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

}