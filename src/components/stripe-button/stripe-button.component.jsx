import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // Stripe need to see in cents
  const priceForStrip = price * 100;
  // Stripe Key
  const publishableKey = "pk_test_glVqoyB7P2DrKBCKA3dqEKsX00v9cEby9U";

  // Token which is send to the back end to create the charge
  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
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
