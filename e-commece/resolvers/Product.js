

exports.Product = {
    // Fetch the category for a given product
    category: ({ categoryId }, args, { categories }) => {

        // Fetch the corresponding category from the category list having that categoryID
        const category = categories.find(category => category.id === categoryId)

        // Return that category
        return category
    }
}