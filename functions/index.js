
const express = require("express");
const stripe = require("stripe")('sk_test_51IaP6WKvsPInPl3MO7OsxsHTLKHqHHfePdx6Zg32qcx95Rssan0O7JnxaQmuPKCSyVWfuqeKdT5K5YOMeKO8wVP500OMZT9cAO');
const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({
  origin: true
})
const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
})



//API
//-App Config
const app = express();
//-Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API Routes
app.get('/', (request, response) => response.status(200).send('hello-world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment Request Recieved for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen Command
exports.api = functions.https.onRequest(app)

exports.submit = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS')
  res.set('Access-Control-Allow-Headers', '*')

  if (req.method === 'OPTIONS') {
    res.end()
  } else {
    cors(req, res, () => {
      if (req.method !== 'POST') {
        return
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: gmailEmail,
        subject: `${req.body.name} just messaged me from my website`,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
      }

      return mailTransport.sendMail(mailOptions).then(() => {
        console.log('New email sent to:', gmailEmail)
        res.status(200).send({
          isEmailSend: true
        })
        return
      })
    })
  }
})



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
