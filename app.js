var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('hi there!');
});

app.get('/dogs', function(req,res){
    res.send('ROOOOF');
    console.log('Someone made a get reqest to /dogs ');
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Server has stared on port 3000!");
});