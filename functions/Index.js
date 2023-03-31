const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { response } = require("express");
const stripe = require('stripe')('sk_test_51MnB0RD1VVGGuRl5KzqZCcYojeo1O9pXNilfJNNupBl4nSziR96ZRbAn8T15dYQIQMEOTdZVUFOQmLj7EUj5TybJ00Mbew92YE')

// - API

// - App config
const app = express();

// - Midlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // Subunits of the currency
        currency: 'usd'
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen comand
exports.api = functions.https.onRequest(app);

// - Example endpoint
// http://127.0.0.1:5001/clone-bdce7/us-central1/api