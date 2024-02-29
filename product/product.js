let params = new URLSearchParams(window.location.search);
let id = params.get('id');

fetch(`https://api.kedufront.juniortaker.com/item/${id}`)
    .then(response => response.json())
    .then(data => {
        const itemElement= document.getElementById('itemsContainer');

        const imageElement = document.getElementById('item-image');
        imageElement.src = `https://api.kedufront.juniortaker.com/item/picture/${id}`;

        const nameElement = document.getElementById('item-name');
        nameElement.textContent = data.item.name.toUpperCase();
        nameElement.classList.add('item-name');

        const priceElement = document.getElementById('item-price');
        priceElement.textContent = data.item.price + ' €';
        priceElement.classList.add('item-price');

        const descElement = document.getElementById('item-desc');
        descElement.textContent = data.item.description;
        descElement.classList.add('item-desc');
    })
    .then(data => {
        const addToCartButton = document.getElementById("addtocart");

        addToCartButton.addEventListener('click', function() {
            const productId = id;
            let cart = localStorage.getItem('cart');
            if (cart) {
                cart = JSON.parse(cart);
                if (cart[productId]) {
                    cart[productId]++;
                } else {
                    cart[productId] = 1;
                }
            } else {
                cart = {};
                cart[productId] = 1;
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('Added to cart:', productId);
        });
    })
    .catch(error => console.error('Error:', error));
