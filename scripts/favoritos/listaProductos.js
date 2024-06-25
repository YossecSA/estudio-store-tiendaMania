document.addEventListener('DOMContentLoaded', function () {
    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Función para crear tarjetas de productos
    function createCard(product) {
        return `
        <div>
            <a href="/details.html?id=${product.id}" class="product-card">
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
            <i class='bx bxs-heart i_favorito red-heart'  onclick="deleteFromFavorites('${product.id}')"></i>
        </div>
        `;
    }

    const favoriteProductsContainer = document.getElementById('listFavoritos');
    favorites.forEach(product => {
        const cardHTML = createCard(product);
        favoriteProductsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
});

function deleteFromFavorites(productId) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const index = favorites.findIndex(product => product.id === productId);
    
    if (index !== -1) {

        Swal.fire({
            icon: 'success',
            title: 'Eliminado de favoritos',
            text: '¡El producto se ha eliminado de tu lista de favoritos!',
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false
        }).then(() => {
            favorites.splice(index, 1);
            localStorage.setItem('favorites', JSON.stringify(favorites));

            location.reload();
        });
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Producto no encontrado',
            text: '¡El producto no se encontró en tu lista de favoritos!',
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false
        });
    }
}