async function getItemImage(itemId) {
    const response = await fetch(`https://api.kedufront.juniortaker.com/item/picture/${itemId}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Assuming the image is returned as a blob
    const imageBlob = await response.blob();

    // Create an object URL for the image
    const imageUrl = URL.createObjectURL(imageBlob);

    return imageUrl;
}

fetch('https://api.kedufront.juniortaker.com/item/')
    .then(response => response.json())
    .then(data => {
        const itemsContainer = document.getElementById('itemsContainer');
        data.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item-box');

            const nameElement = document.createElement('p');
            nameElement.textContent = item.name;
            nameElement.classList.add('item-name');
            itemElement.appendChild(nameElement);

            const imageElement = document.createElement('img');
            imageElement.classList.add('item-image');
            itemElement.appendChild(imageElement);

            const priceElement = document.createElement('p');
            priceElement.textContent = item.price;
            priceElement.classList.add('item-price');
            itemElement.appendChild(priceElement);

            itemsContainer.appendChild(itemElement);

            // Fetch the image for the item
            getItemImage(item.id)
                .then(imageUrl => {
                    // Set the image URL
                    imageElement.src = imageUrl;
                })
                .catch(error => console.error('Error:', error));
        });
    })
    .catch(error => console.error('Error:', error));