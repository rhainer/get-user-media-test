var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
    });

app.listen(8080);