var express = require("express");
var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
  var unicorns = ["Uber","Airbnb","Pinterest","Dropbox","Snapchat","Tinder","Yelp","Kik","YouTube","Twitter","PornHub" ];
  var nouns = ["Albinos", "Wizards", "Assholes", "Alcoholics","Old People", "Mutes", "Nerds","Racists","Pedophiles"];
  var uRand = Math.floor(Math.random() * unicorns.length);
  var nRand = Math.floor(Math.random() * nouns.length);
  res.render("home", {unicorns: unicorns, nouns:nouns, uRand: uRand, nRand: nRand});
});

app.listen(3000, function() {
  console.log("server running");
});
