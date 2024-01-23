const orders  = [
    {
        date: '20-01-2024',
        subtotal: 10.99,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'red shoe',
                    price: 69,
                },
                quantity: 2
            }
        ]
    }
]

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders
}