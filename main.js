fetch('https://api.kedufront.juniortaker.com/item/')
    .then(response => response.json())
    .then(data => {
        const itemsContainer = document.getElementById('itemsContainer');
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item-box');

            itemElement.id = item._id;

            const imageElement = document.createElement('img');
            imageElement.src = `https://api.kedufront.juniortaker.com/item/picture/${item._id}`;
            imageElement.classList.add('item-image');
            itemElement.appendChild(imageElement);

            const descElement = document.createElement('p');
            descElement.textContent = item.description;
            descElement.classList.add('item-desc');
            itemElement.appendChild(descElement);

            const nameElement = document.createElement('p');
            nameElement.textContent = item.name.toUpperCase();
            nameElement.classList.add('item-name');
            itemElement.appendChild(nameElement);

            const priceElement = document.createElement('p');
            priceElement.textContent = item.price + ' €';
            priceElement.classList.add('item-price');
            itemElement.appendChild(priceElement);

            itemsContainer.appendChild(itemElement);
        });
        const itemBoxes = document.querySelectorAll('.item-box');
        itemBoxes.forEach(box => {
            box.addEventListener('click', () => {
                const id = box.getAttribute('id');
                console.log(`Box with id ${id} was clicked`);
                window.location.href = `product/product.html?id=${id}`;
            });
        });
    })
    .catch(error => console.error('Error:', error));
