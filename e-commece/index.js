const { ApolloServer, gql } = require('apollo-server')
const typeDefs = require('./typeDefs/typeDefs')
const { products, categories } = require('./db/db')
const { Query } = require('./resolvers/Query')
const { Category } = require('./resolvers/Category')
const { Product } = require('./resolvers/Product')

// Start server
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product
    },
    context: {
        products,
        categories
    }
});

server.listen().then(({ url }) => {
    console.log("Server is listening on " + url);
})