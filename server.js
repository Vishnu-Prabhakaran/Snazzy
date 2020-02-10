const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

// Stripe library
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

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
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // Any url that the user hits, we pass a function
  app.get("*", function(req, res) {
    res.sendFile()(path.join(__dirname, "client/build", "index.html"));
  });
}

// Listen to port fo errors
app.listen(port, error => {
  if (error) throw error;
  console.log("Server running on port" + port);
});

// Payment route
app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "aud"
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
