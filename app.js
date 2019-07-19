
var express = require('express');
var app = express();
var routes_v1 = require('./src/routes/v1/routes_v1');
var path = require("path");
 
app.get('/', function (req, res){
   res.send({
      name: 'Yatika',
      surname: 'Panda'
   });
});

app.get('/index', function (req, res){

   // form.parse(req, function(a,b,c){console.log(a,b,c)});

   // form.on('fileBegin', function (name, file){
   //     file.path = __dirname + '/uploads/' + file.name;
   // });

   // form.on('file', function (name, file){
   //     console.log('Uploaded' + file.name);
   // });

   res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/api/v1', routes_v1);

app.listen(3002);
