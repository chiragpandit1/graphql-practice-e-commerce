

exports.Query = {
    numberOfAnimals: (parent, args, context) => {
        return 55;
    },
    hello: (parent, args, context) => {
        return "World!"
    },
    price: (parent, args, context) => {
        return 12.43
    },
    isCool: (parent, args, context) => {
        return false
    },

    // Resolvers for products 
    products: (parent, args, { products }) => {
        return products
    },
    product: (parent, { id }, { products }) => {
        const product = products.find(product => product.id === id)
        return product
    },

    // Resolvers for Category 
    categories: (parent, args, { categories }) => {
        return categories;
    },

    category: (parent, { id }, { categories }) => {
        const category = categories.find(category => category.id === id)
        return category
    }

}