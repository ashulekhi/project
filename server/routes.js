var express = require('express');
var phantom = require('phantom');
var path = require('path');

var route = express.Router();

route.get('/' , function(req,res){
	console.log('reached to this route');
	res.render('index');
})

route.get('/view' , function(req,res){
   
})

route.get('/download' , function(req,res){
	console.log('requested download' , req.query);
	res.setHeader('Content-type', 'application/pdf');
	// res.download(path.resolve(req.query.file));
	  res.download(path.join(__dirname, '../',req.query.file));

	
})


route.post('/convert' , function(req,res){
	console.log('reached to convert');
	console.log('we have recieved the url' , req.query);

    filename = req.query.weburl.substr(8,3);
  filename = filename +  Math.floor((Math.random() * 1000000) + 1)  + '.pdf';
  console.log('this is the filename' , filename);

  phantom.create().then(function(ph) {
    ph.createPage().then(function(page) {

      //
      // console.log('conversion started' , weburl)
      /* page.paperSize = {
       width: '400px',
       height: '300px'
       }*/

      page.open(req.query.weburl).then(function(status) {

        console.log('page opened');

        page.property('viewportSize', {width:1400, height: 1000}).then(function() {
        });
        page.property('paperSize', {width: 1400, height: 700}).then(function() {
        });
        //page.viewportSize = {height:600 , width:600};

        /* format :'A4',
         orientation:'portrait',
         border:'0.5in'
         }*/

        console.log(filename);


        page.render(filename).then(function() {
          /* fs.rename(filename , './files/' + filename , function(){
           console.log('file moved')
           })*/
          console.log('Page Rendered');
          ph.exit();
          res.send(filename);
          //res.download('../server/file.pdf')
          //res.send(filename)
        });
      });
    });
  });

	
})


route.get('/getData',function(req,res){
	res.send({
		name:'ashu',
		add:'pv'
	})
})

module.exports = route;