// Fetch data from the API
fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        // Check if data is an array or an object with a single key
        if (!Array.isArray(data)) {
            // If data is an object with a single key, extract the array from it
            if (data && Array.isArray(data.products)) {
                data = data.products;
            } else {
                console.LOG( data);
            }
        }

        // Get the container where we'll display the products
        const productContainer = document.getElementById('product-container');

        // Iterate over the products using forEach
        data.forEach(product => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-md-4', 'mb-3');
            console.log(product)

            cardDiv.innerHTML = `
                <div class="card">
                    <img src="${product.images[1]}" class="card-img-top" alt="${product.title}">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">Price: $${product.price}</p>
                    </div>
                </div>
            `;

            productContainer.appendChild(cardDiv);
        });
    });
