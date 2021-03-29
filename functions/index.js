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
// Listen Command
exports.api = functions.https.onRequest(app)



// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
