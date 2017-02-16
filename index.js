// feeds
// Add twitter stream API

const express = require("express");
const bodyParser = require("body-parser");

let port = process.env.PORT || 8080;

let app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.send({message:"I 💙 🐼", remark:"hello 🌍"});
})

app.listen(port)
console.log(`🌍 Web Server is started - listening on ${port}`)
