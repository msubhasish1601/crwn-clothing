import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IE6zKAuZh9OBSoJRyEfOLG9rJ2jdjDl3uTJUVPH0J4rCNpbkLrTzmQ0fDCMjDSHdgLo1yO9uIRzMqDJ3SrB3rY300EFKmppZP';

  const onToken = token => {
     //console.log(token);
    // alert('Payment Succesful!');

    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment Successful.')
    }).catch(error => {
      console.log('Payment error: ', error);
      alert('There was an issue with your payment. Please sure you use the provided credit card.');
    });

  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
