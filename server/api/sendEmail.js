var keys = require('../keys.js');
var sendgrid = require('sendgrid')(keys.SENDGRID_APIKEY);
var mailgun = require('mailgun-js')({apiKey: keys.MAILGUN_APIKEY, domain: 'sandbox92d2332408e947f2b99e5595a39e1d1c.mailgun.org'})

var payload; 

var emailAPIs = {
  sendgrid :  function(req, res, cb){
                sendgrid.send(payload, function(err, json){
                  if (err) { 
                    if (!cb){
                      res.status(400).send("Emails invalid");
                    } else {
                      cb()
                    };
                  } else {
                    res.status(201).send("Success sending from Sendgrid ",JSON.stringify(json));
                  }                  
                });
              },

  mailgun : function(req, res, cb){
                mailgun.messages().send(payload, function(err, json){
                    console.log('inside send')
                  if (err) { 
                    if (cb === false){
                      res.status(400).send("Emails invalid");
                    } else {
                      cb()
                    };
                  } else {
                    res.status(201).send("Success sending from Mailgun ", JSON.stringify(json));
                  }                  
                });
            }
}

module.exports = function(req, res){

  payload = {
    to      : req.body.to,
    from    : req.body.from,
    subject : req.body.subject,
    text    : req.body.message
  };

  emailAPIs.sendgrid(req, res, function(){
    emailAPIs.mailgun(req, res, false);
  });
}