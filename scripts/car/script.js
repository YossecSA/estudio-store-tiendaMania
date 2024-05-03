const productosContainer = document.getElementById("cartproducts");
const productos = JSON.parse(localStorage.getItem("cart")) || [];

productosContainer.innerHTML = "";

//para mostrar todos los productos de los carritos
for (const producto of productos) {
    productosContainer.innerHTML += `
        <article class="product-card">
            <a href="./details.html">
                <div class="product-img">
                    <img src="${producto.img}" alt="${producto.title}" />
                </div>
                <div class="product-info">
                    <span class="product-title">${producto.title}</span>
                    <span class="product-description">${producto.color}</span>
                    <input type="number" value="${producto.quantity}">
                </div>
                <div class="product-price-block">
                    <span class="price">$${producto.subtotal}</span>
                </div>
            </a>
        </article>
    `;
}

//mostrar el subtotal a pagar
const totalElement = document.getElementById("total").querySelector(".cart-price");

let total = 0;

for (const producto of productos) {
    total += parseFloat(producto.subtotal);
}

totalElement.textContent = `$${total.toFixed(2)}`;