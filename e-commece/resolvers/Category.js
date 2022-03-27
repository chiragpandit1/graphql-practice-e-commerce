

module.exports.Category = {
    // Fetch all products relating to a single category
    products: ({ id: categoryId }, args, { products }) => {
        return products.filter(product => product.categoryId === categoryId)
    }
}