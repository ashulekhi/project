  var express = require('express');
  var routes = require('./server/routes.js')
  var path = require('path');
  var app = express();
  var phantom = require('phantom');
  var bodyParser = require('body-parser');

  app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())


   // app.use(express.static(path.join(__dirname,'./client')));

   app.use(express.static(__dirname + '/client'));
   app.use(express.static(__dirname));


   app.use('/',routes); 

   app.listen(process.env.PORT||4000 , function(){
   	console.log('>>>>>>>>>>>>' , __dirname);
   console.log('server started' );

  }); 