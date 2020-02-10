import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  // Stripe need to see in cents
  const priceForStrip = price * 100;
  // Stripe Key
  const publishableKey = "pk_test_glVqoyB7P2DrKBCKA3dqEKsX00v9cEby9U";

  // Token which is send to the back end to create the charge
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStrip,
        token
      }
    })
      .then(response => {
        alert("Payment successful");
      })
      .catch(error => {
        console.log("payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure to use the provider credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Snazzy"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      // Token is when its payment sucess which is handled bay a function
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
