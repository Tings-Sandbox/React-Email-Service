var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var keys = require('./keys.js');
var sendgrid = require('sendgrid')(keys.SENDGRID_APIKEY);
var mailgun = require('mailgun-js')({apiKey: keys.MAILGUN_APIKEY, domain: 'sandbox92d2332408e947f2b99e5595a39e1d1c.mailgun.org'})

app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res){

  res.send("get request!");

});

app.post('/api/send', function(req, res){

  console.log(req.body, 'body!');

  //send grid
  var payload = {
    to      : 'maidenbelize@gmail.com',
    from    : 'gtdeng@gmail.com',
    subject : 'hello!',
    text    : 'sendgrid working well!!'
  };

  sendgrid.send(payload, function(err, json){
    if (err) { console.log(err); }
    console.log('json', json);
  });

  //next emailservice
  mailgun.messages().send(payload, function(err, body){
    console.log(body);
    res.send('success!');

  })


})

app.listen(3000, function(err, result){
  if (err) { 
    console.log (err);
  }
  else { 
    console.log('Listening on port 3000'); 
  }
});

/* SECOND TRY AT LOADING OWN SERVER 
Source: https://github.com/webpack/react-starter
https://github.com/webpack/webpack-dev-server/issues/95
*/

// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('../webpack.config');

// new WebpackDevServer(webpack(config), {
//   publicPath: config.output.publicPath,
//   hot: true,
//   historyApiFallback: true
// }).listen(3000, 'localhost', function (err, result) {
//   if (err) {
//     console.log(err);
//   }

//   console.log('Listening at localhost:3000');
// });

/* FIRST TRY AT LOADING OWN SERVER */
// var express = require('express');
// var path = require('path');
// // var logger = require('morgan');
// var routes = require('./routes/index');

// var app = express();

// // app.set('views', path.join(__dirname, '../client/app/index.ejs'));
// // app.set('view engine', 'html');

// // app.use(logger('dev'));

// app.use('/', routes);

// // Only load this middleware in dev mode (important).
// if (app.get('env') === 'development') {
//   var webpackMiddleware = require("webpack-dev-middleware");
//   var webpack = require('webpack');

//   var config = require('../webpack.config');

//   app.use(webpackMiddleware(webpack(config), {
//     publicPath: "/build",

//     headers: { "X-Custom-Webpack-Header": "yes" },

//     stats: {
//       colors: true
//     }
//   }));

// }

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// var server = app.listen(8000, function () {
//   console.log('listening on port 8000');
// });
