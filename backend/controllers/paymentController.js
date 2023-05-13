const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const instance = require("../server");
const crypto = require("crypto");

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
	const myPayment = await stripe.paymentIntents.create({
		amount: req.body.amount,
		currency: "inr",
		metadata: {
			company: "Ecommerce",
		},
	});

	res.status(200).json({
		success: true,
		client_secret: myPayment.client_secret,
	});
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
	res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});

exports.createOrder = catchAsyncErrors(async (req, res, next) => {
	const options = {
		amount: Number(req.body.totalPrice * 100),
		currency: "INR",
	};
	const order = await instance.instance.orders.create(options);

	res.status(200).json({
		success: true,
		message: "Order created successfully",
		order,
	});
});

exports.paymentVerification = catchAsyncErrors((req, res, next) => {
	const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
		req.body;

	let body = razorpay_order_id + "|" + razorpay_payment_id;

	const expectedSignature = crypto
		.createHmac("sha256", process.env.RAZORPAY_SECRE_KEY)
		.update(body.toString())
		.digest("hex");

	const signatureIsValid = expectedSignature === razorpay_signature;
	if (signatureIsValid) {
		// store paymentid in database
		res.redirect(
			`http://localhost:3000/success?references=${razorpay_payment_id}&status=succeeded`
		);
	} else {
		res.status(200).json({
			success: false,
			message: "Payment Failed",
		});
	}
});

exports.sendRazorpayKey = catchAsyncErrors((req, res, next) => {
	res.status(200).json({ success: true, key: process.env.RAZORPAY_KEY_ID });
});
