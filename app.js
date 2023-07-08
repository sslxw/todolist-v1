const bodyParser = require("body-parser");
const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

var items = [];

app.listen(3000, function(){
    console.log("port is running on port 3000");
});

app.get("/", function(req, res){
    res.render('list', {newListItems: items});
});

app.post("/", function(req,res){
    newItem = req.body.newItem;

    items.push(newItem);

    res.redirect("/");
});

