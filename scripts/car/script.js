const productosContainer = document.getElementById("cartproducts");
const productos = JSON.parse(localStorage.getItem("cart")) || [];

productosContainer.innerHTML = "";

//para mostrar todos los productos de los carritos
for (const producto of productos) {
    productosContainer.innerHTML += `
        <article class="product-card">
            <a href="#">
                <div class="product-img">
                    <img src="${producto.img}" alt="${producto.title}" />
                </div>
                <div class="product-info">
                    <span class="product-title">${producto.title}</span>
                    <span class="product-description">${producto.color}</span>
                    <input type="number" name="quantity" min="1" id="${producto.id}" onchange="changeQuantity(event)" value=${producto.quantity}>
                </div>
                <div class="product-price-block">
                    <span class="price">$${producto.subtotal}</span>
                </div>
            </a>
        </article>
    `;
}

function changeQuantity(event) {
    const productId = event.target.id;
    const newQuantity = parseInt(event.target.value);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const productIndex = cart.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        cart[productIndex].quantity = newQuantity;
        cart[productIndex].subtotal = cart[productIndex].price * newQuantity;

        localStorage.setItem("cart", JSON.stringify(cart));
        event.target.value = newQuantity;
        const productPriceBlock = event.target.parentElement.nextElementSibling.querySelector('.price');
        productPriceBlock.textContent = `$${cart[productIndex].subtotal.toFixed(2)}`;
        updateTotal();
    }
}
updateTotal();
const buySelector = document.getElementById("buy-button");
buySelector.addEventListener("click", finalizePurchase);
function finalizePurchase() {
    Swal.fire({
        title: "¿Estás seguro de tu compra?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, comprar"
    }).then((result) => {
        if (result.isConfirmed) { 
            const cartproducts = [];
            localStorage.removeItem("cart");
            updateCartView();
            updateTotal();
            Swal.fire({
                title: "¡Compra Realizada con exito!",
                text: "Tu paquete se enviara a tu casa",
                icon: "success"
            });
        }
    });
}
function updateCartView() {
    const productosContainer = document.getElementById("cartproducts");
    productosContainer.innerHTML = "<p>No hay productos en el carrito</p>";
}

// Función para actualizar el total a pagar
function updateTotal() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = 0;

    for (const product of cart) {
        total += parseFloat(product.subtotal);
    }

    document.getElementById("total").querySelector(".cart-price").textContent = `$${total.toFixed(2)}`;
}