let params = new URLSearchParams(window.location.search);
let id = params.get('id');

fetch(`https://api.kedufront.juniortaker.com/item/${id}`)
    .then(response => response.json())
    .then(data => {
        const itemElement= document.getElementById('itemsContainer');

        const imageElement = document.createElement('img');
        imageElement.src = `https://api.kedufront.juniortaker.com/item/picture/${id}`;
        imageElement.classList.add('item-image');
        itemElement.appendChild(imageElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = data.item.price + ' €';
        priceElement.classList.add('item-price');
        itemElement.appendChild(priceElement);

        const descElement = document.createElement('p');
        descElement.textContent = data.item.description;
        descElement.classList.add('item-desc');
        itemElement.appendChild(descElement);

        const nameElement = document.createElement('p');
        nameElement.textContent = data.item.name.toUpperCase();
        nameElement.classList.add('item-name');
        itemElement.appendChild(nameElement);

        itemContainer.appendChild(itemElement);
    })
    .catch(error => console.error('Error:', error));