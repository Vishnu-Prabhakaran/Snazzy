const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
// Compression
const compression = require('compression');
// Email
const nodemailer = require('nodemailer');
// Express SSLify
const enforce = require('express-sslify');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

// Stripe library
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Express
const app = express();

// Port - Server port will be different than local host 3000
const port = process.env.PORT || 5000;

// Convert all request to json
app.use(bodyParser.json());
// Encod url
app.use(bodyParser.urlencoded({ extended: true }));
// Cors - Checks to make sure the origin is same
app.use(cors());

// Express static middle ware function - only by using route
if (process.env.NODE_ENV === 'production') {

  // Compression
  app.use(compression());
  // Enforce SSLify to force HTTPS, trustProtoHeader only for Heroku becaue of reverse proxy
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  app.use(express.static(path.join(__dirname, 'client/build')));

  // Any url that the user hits, we pass a function
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Listen to port for errors
app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

// Service worker - when ever the application required the service-Worker.js file, get it from the build folder
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-Worker.js'));
});

// Payment route
app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'aud'
  };
  // Charges
  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

// Email

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public', 'index.html'));
});

// Chunk 1
// require('dotenv').config();
// const sendMail = require('./mail');
// const { log } = console;

// Data parsing
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

// Send email
// Email successfullyu receivng from contact
app.post('/email', (req, res) => {
  console.log('Data', req.body);
  res.json({ message: ' Message received!!!' });
});

// // email, subject, text
// app.post('/email', (req, res) => {
//     const { subject, email, text } = req.body;
//     log('Data: ', req.body);

//     sendMail(email, subject, text, function(err, data) {
//         if (err) {
//             log('ERROR: ', err);
//             return res.status(500).json({ message: err.message || 'Internal Error' });
//         }
//         log('Email sent!!!');
//         return res.json({ message: 'Email sent!!!!!' });
//     });
// });

// // Render home page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'index.html'));
// });

// // Error page
// app.get('/error', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'error.html'));
// });

// // Email sent page
// app.get('/email/sent', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views', 'emailMessage.html'));
// });
