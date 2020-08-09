var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("list");
})

app.get("/form", function(req, res) {
  var info = req.body.email;
  res.render("form", {info:info});
})

app.post("/form", function(req,res) {
  var email = req.body.email;


  res.redirect("/");
})


app.listen(process.env.PORT || 3000, process.env.IP, function(){
  console.log("Server is running!");
});
