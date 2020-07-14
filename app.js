const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');


const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true,useUnifiedTopology: true})

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log("MongoDB database connection established succesfully");
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(5000, () => {
    console.log('now listening for requests on port 5000');
});

