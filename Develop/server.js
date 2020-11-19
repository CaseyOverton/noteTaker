var express = require('express');
var apiRoute = require('./routes/apiRoutes')
var htmlRoute = require('./routes/htmlRoutes')
var app = express();
// add var PORT 

 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(express.static('public'))
 app.use('/api', function(req, res) {
     res.json(api);
 })



// add start port