const imputSearch = document.querySelector('#search');

// Agrega un escuchador de eventos para el evento keyup en el input de búsqueda
imputSearch.addEventListener("keyup", captureText);

function captureText(event) {
 // Verifica si event.target.value está definido antes de llamar a toLowerCase()
    const searchText = event.target.value.toLowerCase();
    console.log(searchText)

    const filteredProducts = products.filter(product => product.nombre.toLowerCase().includes(searchText));
    console.log(filteredProducts)

    updateView(filteredProducts);
}

function updateView(products) {
    
    const productContainer = document.querySelector('#products');

    productContainer.innerHTML = '';
    
    printCards(products, "products");
}