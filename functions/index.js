const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IaP6WKvsPInPl3MO7OsxsHTLKHqHHfePdx6Zg32qcx95Rssan0O7JnxaQmuPKCSyVWfuqeKdT5K5YOMeKO8wVP500OMZT9cAO');


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


//example : (http://127.0.0.1:5001/irononcarpetlabels/us-central1/api)



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
