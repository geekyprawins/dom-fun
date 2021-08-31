var express = require("express");

var app = express();

// ejs
app.set('view engine', 'ejs');
console.log("Listening began at http://127.0.0.1:2020");
// routing
app.get("/", function (req, res) {
  //   res.send("This is the home page!!!!!!");
//   res.sendFile(__dirname + "/home.html");
res.render('home');
});

app.get("/contact", function (req, res) {
//   res.send("This is the contact page!!!");
res.render('contact');

});

// route parameters
app.get("/profile/:name", function (req, res) {
//   res.send("You wanted to see a profile with name of : " + req.params.name);
var data={age: 18, job:'Student',
hobbies: ['eating', 'sleeping', 'coding']
};
res.render('profile', {person: req.params.name, data: data});

});
app.listen(2020);



