var keys = require('../keys.js');
var sendgrid = require('sendgrid')(keys.SENDGRID_APIKEY);
var mailgun = require('mailgun-js')({apiKey: keys.MAILGUN_APIKEY, domain: 'sandbox92d2332408e947f2b99e5595a39e1d1c.mailgun.org'})

var payload; 

var emailAPIs = {
  sendgrid : function(req, res, cb){
                  sendgrid.send(payload, function(err, json){
                  if (err) { 
                    console.log(err);
                    cb(req, res);
                  }
                  console.log('json', json);
                  res.send(json);
                });
              },

  mailgun : function(req, res, cb){
                mailgun.messages().send(payload, function(err, json){
                if (err) {
                  console.log(err);
                  cb(req, res);
                }
                console.log(json);
                res.send(json);
              })
            }
}

module.exports = function(req, res){

  payload = {
    to      : req.body.to,
    from    : req.body.from,
    subject : req.body.subject,
    text    : req.body.message
  };

  emailAPIs.sendgrid(req, res, emailAPIs.mailgun);
}