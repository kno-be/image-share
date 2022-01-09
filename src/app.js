let express = require("express");
let app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.statusCode(200);
})

module.exports = app;