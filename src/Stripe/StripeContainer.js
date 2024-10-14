import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51PQ7zABf8V7Nd4OjQbEvHPbaf3NC8otELEw2VtBWTz7Piq1CYhhRPqvVfrjQFV5RNA1KbpSAMavxrjaD5heOjjON00KUlZUnLc";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default Stripe;