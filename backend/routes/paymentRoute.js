const express = require("express");
const {
	processPayment,
	sendStripeApiKey,
	createOrder,
	paymentVerification,
	sendRazorpayKey,
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

router.route("/razorpayapikey").get(isAuthenticatedUser, sendRazorpayKey);

router.route("/new/order").post(isAuthenticatedUser, createOrder);

router.route("/paymentverify").post(isAuthenticatedUser, paymentVerification);

module.exports = router;
