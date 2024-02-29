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
    .then(data => {
        const cartButton = document.getElementById("cart-button");
        const cartPopup = document.getElementById("cart-popup");

        cartButton.addEventListener('click', function() {
            let cart = localStorage.getItem('cart');
            if (cart) {
                cart = JSON.parse(cart);
                let fetchPromises = [];
                for (let productId in cart) {
                    let fetchPromise = fetch(`https://api.kedufront.juniortaker.com/item/${productId}`)
                        .then(response => response.json())
                        .then(data => {
                            return `
                                <div class="cart-item">
                                    <img src="https://api.kedufront.juniortaker.com/item/picture/${productId}" alt="${data.item.name}">
                                    <div class="cart-item-info">
                                        <p>${data.item.name}</p>
                                        <p>${data.item.price} €</p>
                                        <div class="cart-item-quantity">
                                            <button class="decrease">-</button>
                                            <p>Quantity: ${cart[productId]}</p>
                                            <button class="increase">+</button>
                                        </div>
                                        <button class="delete">Delete</button>
                                    </div>
                                </div>
                            `;
                        })
                        .catch(error => console.error('Error:', error));
                    fetchPromises.push(fetchPromise);
                }
                Promise.all(fetchPromises).then(cartItemsHtml => {
                    cartPopup.innerHTML = cartItemsHtml.join('');
                });
            }
            cartPopup.classList.toggle('show');
        });
    })
    .catch(error => console.error('Error:', error));
