window.onload = function() {
    let cart = localStorage.getItem('cart');
    if (cart) {
        cart = JSON.parse(cart);
        for (let productId in cart) {
            console.log('Product ID:', productId, 'Quantity:', cart[productId]);
        }
    } else {
        console.log('Cart is empty');
    }
}
