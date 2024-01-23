const products = [
    {
        id: 'redshoe',
        description: 'a red shoe',
        price: 10.99,
        reviews: []
    },
    {
        id: 'blueshoe',
        description: 'a blue shoe',
        price: 12.99,
        reviews: []
    },
    {
        id: 'greenshoe',
        description: 'a green shoe',
        price: 14.99,
        reviews: []
    },
]

function getAllProducts() {
    return products;
}

function getProductsByPrice(min, max) {
    return products.filter((product) => {
        return product.price >=- min && product.price <= max
    })
}

function getProductById(id) {
    return products.find((product) => {
        return product.id === id;
    })
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    }
    products.push(newProduct);
    return newProduct;
}

function addNewReview(id, rating, comment) {
    const product = products.find((p) => {
        return p.id === id;
    })
    const newReview = {
        rating,
        comment
    }
    product.reviews.push(newReview);
    return product;    
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewReview
}