fetch('https://api.kedufront.juniortaker.com/item/')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));fetch('https://api.kedufront.juniortaker.com/item/')
    .then(response => response.json())
    .then(data => {
    const itemsContainer = document.getElementById('itemsContainer');
    data.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = item.name;
        itemsContainer.appendChild(itemElement);
        });
    })
.catch(error => console.error('Error:', error));
