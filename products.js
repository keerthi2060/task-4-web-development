const products = [
    {
        name: "Wireless Headphones",
        category: "electronics",
        price: 80,
        rating: 4.5,
        icon: "🎧"
    },

    {
        name: "Smart Watch",
        category: "electronics",
        price: 120,
        rating: 4.7,
        icon: "⌚"
    },

    {
        name: "Bluetooth Speaker",
        category: "electronics",
        price: 45,
        rating: 4.2,
        icon: "🔊"
    },

    {
        name: "Casual T-Shirt",
        category: "fashion",
        price: 25,
        rating: 4.1,
        icon: "👕"
    },

    {
        name: "Running Shoes",
        category: "fashion",
        price: 70,
        rating: 4.6,
        icon: "👟"
    },

    {
        name: "Backpack",
        category: "fashion",
        price: 40,
        rating: 4.3,
        icon: "🎒"
    },

    {
        name: "JavaScript Book",
        category: "books",
        price: 35,
        rating: 4.8,
        icon: "📘"
    },

    {
        name: "Cybersecurity Guide",
        category: "books",
        price: 55,
        rating: 4.9,
        icon: "🔐"
    },

    {
        name: "Python Programming",
        category: "books",
        price: 45,
        rating: 4.6,
        icon: "🐍"
    }
];

const productContainer =
    document.getElementById("productContainer");

const categoryFilter =
    document.getElementById("categoryFilter");

const priceFilter =
    document.getElementById("priceFilter");

const sortFilter =
    document.getElementById("sortFilter");

function displayProducts(productList) {

    productContainer.innerHTML = "";

    if (productList.length === 0) {

        productContainer.innerHTML = `
            <div class="no-products">
                <h2>No products found</h2>
                <p>Try changing your filters.</p>
            </div>
        `;

        return;
    }

    productList.forEach(function (product) {

        const card =
            document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <div class="product-icon">
                ${product.icon}
            </div>

            <h2>
                ${product.name}
            </h2>

            <span class="category">
                ${product.category}
            </span>

            <p class="price">
                $${product.price}
            </p>

            <p class="rating">
                ⭐ ${product.rating}
            </p>
        `;

        productContainer.appendChild(card);
    });
}

function updateProducts() {

    let filteredProducts = [...products];

    const category =
        categoryFilter.value;

    if (category !== "all") {

        filteredProducts =
            filteredProducts.filter(function (product) {

                return product.category === category;

            });
    }

    const maxPrice =
        priceFilter.value;

    if (maxPrice !== "all") {

        filteredProducts =
            filteredProducts.filter(function (product) {

                return product.price <= Number(maxPrice);

            });
    }

    const sort =
        sortFilter.value;

    if (sort === "priceLow") {

        filteredProducts.sort(function (a, b) {

            return a.price - b.price;

        });

    } else if (sort === "priceHigh") {

        filteredProducts.sort(function (a, b) {

            return b.price - a.price;

        });

    } else if (sort === "rating") {

        filteredProducts.sort(function (a, b) {

            return b.rating - a.rating;

        });
    }

    displayProducts(filteredProducts);
}

categoryFilter.addEventListener(
    "change",
    updateProducts
);

priceFilter.addEventListener(
    "change",
    updateProducts
);

sortFilter.addEventListener(
    "change",
    updateProducts
);

displayProducts(products);