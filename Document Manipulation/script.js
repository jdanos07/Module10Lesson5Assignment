// Task 1

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2
function displayProducts() {

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;

        document.getElementById("container").appendChild(productDiv);
    });
}

// Task 3
document.addEventListener('DOMContentLoaded', displayProducts);
