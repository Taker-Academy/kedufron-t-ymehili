window.onload = function() {
    const productId = JSON.parse(localStorage.getItem('cart'));

    const cartItemsDiv = document.getElementById('cartitems');

    if (cartItemsDiv) {
        const p = document.createElement('p');
        p.textContent = `Product ID: ${productId}`;
        cartItemsDiv.appendChild(p);
    } else {
        console.error("Element with id 'cartitems' not found");
    }
}