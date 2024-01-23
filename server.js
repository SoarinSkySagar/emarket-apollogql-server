const express = require('express')

// const {graphqlHTTP} = require('express-graphql')
const { ApolloServer } = require('apollo-server-express')

const {makeExecutableSchema} = require('@graphql-tools/schema')
const {loadFilesSync} = require('@graphql-tools/load-files')
const path = require('path')

// const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'))
const typesArray = loadFilesSync('**/*', {
    extensions: ['graphql', 'gql'],
});
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))

async function startApolloServer() {
    const app = express()

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    })

    const server = new ApolloServer({
        schema
    })

    await server.start()
    server.applyMiddleware({app, path: '/graphql'})

    app.listen(3000, () => {
        console.log('server started on port 3000')
    })
}

// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     graphiql: true
// }))

startApolloServer()