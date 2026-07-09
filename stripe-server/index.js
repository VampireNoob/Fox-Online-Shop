const express = require("express");
const app = express();
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require("cors");
const dataGames = require("./data/dataGames");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));

app.post("/stripe/charge", async (req, res) => {
    const { items, id } = req.body;

    if (!Array.isArray(items) || items.length === 0) {
        return res.status(400).json({ message: "Warenkorb ist leer", success: false });
    }

    let amount = 0;
    for (const item of items) {
        const game = dataGames.find(g => g.id === item.gameId);
        if (!game) {
            return res.status(400).json({ message: `Unbekanntes Produkt: ${item.gameId}`, success: false });
        }
        amount += game.price * item.quantity;
    }
    amount = Math.round(amount * 100);

    try {
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "EUR",
            description: "GamerFox",
            payment_method: id,
            confirm: true,
            return_url: 'http://localhost:3000'
        });

        if (payment.status === "succeeded") {
            res.json({ message: "Payment Successful", success: true });
        } else {
            res.status(202).json({ message: "Weitere Bestätigung nötig", success: false, status: payment.status });
        }
    } catch (error) {
        console.log("Zahlung fehlgeschlagen:", error.message);
        res.status(400).json({ message: "Payment Failed", success: false });
    }
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server started...");
});