const { gql } = require('apollo-server')

module.exports  = gql`
    type Query {
        numberOfAnimals: Int, 
        hello: String,
        price: Float,
        isCool: Boolean,
        products: [Product!]!,
        product (id: ID!): Product, 
        categories: [Category!]!,
        category (id: ID!): Category
    }

    type Product {
        id: ID!
        name: String!,
        description: String!,
        quantity: Int!, 
        price: Float!,
        onSale: Boolean!,
        image: String!
        category: Category!
    }

    type Category {
        id: String!
        name: String!
        products: [Product]
    }
`
