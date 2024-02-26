fetch('https://api.kedufront.juniortaker.com/item/')
    .then(response => response.json())
    .then(data => {
        const itemsContainer = document.getElementById('itemsContainer');
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item-box');

            id = item._id;
            const nameElement = document.createElement('p');
            nameElement.textContent = item.name;
            nameElement.classList.add('item-name');
            itemElement.appendChild(nameElement);

            const imageElement = document.createElement('img');
            imageElement.src = `https://api.kedufront.juniortaker.com/item/picture/${id}`;
            imageElement.classList.add('item-image');
            itemElement.appendChild(imageElement);

            const priceElement = document.createElement('p');
            priceElement.textContent = item.price;
            priceElement.classList.add('item-price');
            itemElement.appendChild(priceElement);

            itemsContainer.appendChild(itemElement);
        });
    })
    .catch(error => console.error('Error:', error));