
var express = require('express');
var app = express();
var routes_v1 = require('./src/routes/v1/routes_v1')
 
app.get('/', function (req, res){
   res.send({
      name: 'Yatika',
      surname: 'Panda'
   });
});

app.use('/api/v1', routes_v1);

app.listen(3002);
