const express = require('express');
var path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render("index",{
    })
});

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
    console.log('Listening to port:  ' + 3000);
});