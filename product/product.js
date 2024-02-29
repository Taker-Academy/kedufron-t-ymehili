let params = new URLSearchParams(window.location.search);
let id = params.get('id');

fetch(`https://api.kedufront.juniortaker.com/item/${id}`)
    .then(response => response.json())
    .then(data => {
        const itemElement= document.getElementById('itemsContainer');

        const imageElement = document.getElementById('item-image');
        imageElement.src = `https://api.kedufront.juniortaker.com/item/picture/${id}`;
        itemElement.appendChild(imageElement);

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
    .catch(error => console.error('Error:', error));