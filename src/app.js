let express = require("express");
let app = express();
require('dotenv').config()

const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://berhart:${process.env.PASSWORD}@cluster0.bho24.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.statusCode(200);
})

module.exports = app;