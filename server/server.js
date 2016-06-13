var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var sendEmail = require('./api/sendEmail')

app.use(bodyParser.json());
app.use(cors());

app.post('/api/send', function(req, res){
  sendEmail(req, res);
})

app.listen(3000, function(err, result){
  if (err) { 
    console.log (err);
  }
  else { 
    console.log('Listening on port 3000'); 
  }
});

