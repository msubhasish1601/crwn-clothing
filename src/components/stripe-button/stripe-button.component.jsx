import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) =>{
    const priceForStripe = price *100;
    const publishableKey = 'pk_test_51IE6zKAuZh9OBSoJRyEfOLG9rJ2jdjDl3uTJUVPH0J4rCNpbkLrTzmQ0fDCMjDSHdgLo1yO9uIRzMqDJ3SrB3rY300EFKmppZP';

    const onToken = token =>{
        console.log(token);
        alert('Payment successful');
    }

    return(
        <StripeCheckout 
            label ='Pay Now'
            name = 'CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel ='Pay Now'
            token ={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;