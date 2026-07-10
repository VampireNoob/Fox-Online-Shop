import '../App.css';
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { getCartItems } from "../redux/cartSlice";
import { useSelector } from "react-redux";

export const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const cartItems = useSelector(getCartItems);
    const [messageSuccess, setMessageSuccess] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (cartItems.length === 0 || isProcessing) return;
        setIsProcessing(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const items = cartItems.map(item => ({
                    gameId: item.gameId,
                    quantity: item.quantity
                }));

                const response = await axios.post(
                    `${process.env.REACT_APP_API_URL}/stripe/charge`,
                    { items, id }
                );

                if (response.data.success) {
                    setMessageSuccess(true);
                }
            } catch (error) {
                console.log("Zahlung fehlgeschlagen:", error.message);
            }
        } else {
            console.log(error.message);
        }
        setIsProcessing(false);
    };

    return (
        <div>
            {!messageSuccess ?
            <form onSubmit={handleSubmit} style={{ maxWidth: 500, color: 'white' }}>
                <CardElement />
                <button className="checkOut" disabled={isProcessing || cartItems.length === 0}>
                    {isProcessing ? 'Wird verarbeitet...' : 'Bezahlen'}
                </button>
            </form>
            :
            <div>
                <h2>Die Bezahlung ist erfolgt!</h2>
            </div>
            }
        </div>
    );
};