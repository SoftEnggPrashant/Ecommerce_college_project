import React, { useEffect } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const OrderSuccess = () => {
	const { shippingInfo, cartItems } = useSelector((state) => state.cart);
	const subtotal = cartItems.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);
	const shippingCharges = subtotal > 1000 ? 0 : 200;

	const tax = subtotal * 0.18;

	const totalPrice = subtotal + tax + shippingCharges;

	const location = useLocation();

	const queries = location.search.split("&");
	const paymentId = queries[0].split("=");
	const status = queries[1].split("=");

	const order = {
		shippingInfo,
		orderItems: cartItems,
		itemsPrice: subtotal,
		taxPrice: tax,
		shippingPrice: shippingCharges,
		totalPrice: totalPrice,
		paymentId: paymentId[1],
		status: status[1],
	};

	useEffect(() => {
		const createOrder = async () => {
			const { data } = await axios.post("/api/v1/order/new", order);
			console.log(data);
		};
		createOrder();
	});

	return (
		<div className="orderSuccess">
			<CheckCircleIcon />
			<Typography>Your Order has been Placed successfully </Typography>
			<Link to="/orders">View Orders</Link>
		</div>
	);
};

export default OrderSuccess;
