var express = require("express");
var app = express();
const path=require('path');
var cors = require('cors');
app.use(cors());
//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var PORT = 9000;
// define a route handler for the default home page
//app.use('/',require('./index.html'))
app.use(express.static(path.join(__dirname,'/start/static')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/start/static/index1.html'))
});
app.use('/server2', require('./app/server2.js'));
// start the Express server
app.listen(PORT, function () {
    console.log("Server started at: " + PORT);
});