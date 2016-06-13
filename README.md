#Email 

![alt text](./screenshot)
[https://kqed-challenge.herokuapp.com/] - Deployed on Heroku

Built on React, HTML/CSS, Node.js, Webpack, this full-stack Email Service allows users to send emails. The service connects with multiple email providers including [Sendgrid](https://sendgrid.com/user/signup) and [Mailgun](http://www.mailgun.com), to ensure greater reliability. Email Service will differ to the next provider if one fails. 

##Architecture
**client**: where react components, css, index.html resides. The Client holds most of the frontend used in development.

**dist**: where bundled files live. Before production, I run *npm run build* on the command line, whereby webpack starts at the React component entry point, reads its dependencies, runs babel compilations and css-loaders, bundling it up for distribution during production.

**server**: where the development and production servers reside. During development, I used *server.js* to locally run a backend server in addition to webpack-dev-server. This was one of the challenges I spent some time on-- trying to find out how to add additional API endpoints to the webpack-dev-server. I learned that the webpack-dev-server is meant only to be used in production. 

It wasn't until I started thinking about deployment that I found [tutorial code](http://ditrospecta.com/javascript/react/es6/webpack/heroku/2015/08/08/deploying-react-webpack-heroku.html) that helped me configure my own server alongside webpack. 

The method included creating *server-prod.js* which contains my original server code. This server gets imported over into *app-prod.js* where I use the webpack-dev-middleware to serve files emmited from webpack over a connect server. Webpack configuration magic. 

You will notice that I have exported out the code that deals with the logic of sending emails through mailgun and sendgrid. The code is written in a way that I can easily extend more email service APIs while keeping the code organized. 

The API keys are stored in a separate file and can be gitignored when pushing to a private repo.

##Post-MVP 
If I had additional time on the project, I would have liked to incorporate news stories from NPR, allowing users to share specific stories via email through the website. 


## See more of my projects and my profile here
Blog    : [https://tingdeng.wordpress.com/]
LinkedIn: [https://www.linkedin.com/in/tingdeng]
Resume  : [http://bit.ly/tingdeng]
Github  : [https://github.com/viinasu]
        : [https://github.com/tings-sandbox] 


