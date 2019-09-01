const app = require('express')();
const expressGraphql = require('express-graphql');

const { schema, resolvers } = require('./UserSchema');

const port = 3000;

app.use(
    '/graphql',
    expressGraphql({
        schema,
        rootValue: resolvers,
        graphiql: true
    })
);

app.listen(port, () => { console.log(`App listen on port ${port}`) });