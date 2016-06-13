const path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const sendEmail = require('./api/sendEmail')

module.exports = {
  app: function () {
    //TODO: check if the paths are right
    const app = express()
    const indexPath = path.join(__dirname, '/../index.html')
    const publicPath = express.static(path.join(__dirname, '../dist'))
    app.use(cors());
    app.use(bodyParser.json());


    app.use('/dist', publicPath);

    app.post('/api/send', function(req, res){
      sendEmail(req, res);
    })

    app.get('/', function (_, res) { res.sendFile(indexPath) })


    return app;
  }
}




