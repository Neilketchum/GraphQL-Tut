const express = require("express")
const graphql = require("graphql");
const { graphqlHTTP } = require('express-graphql');
const app = express();
const schema = require('./schema')
const cors = require('cors')
app.use(cors())   //Allowing Cross Origin
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Connected to Port ${PORT}`)
})