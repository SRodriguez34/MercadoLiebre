const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/public')));


app.listen(3020, function () {
    console.log("Servidor corriendo");
});

app.get("/register.html", function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
  });


app.get("/login.html", function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
  });

app.get("/",function(req,res) {
    let htmlPath = path.resolve(__dirname,'./views/index.html')
    res.sendFile (htmlPath);
    })



