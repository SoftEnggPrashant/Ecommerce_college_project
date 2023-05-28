import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import HorizontalScroller from "./HorizontalScroller";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
	const alert = useAlert();
	const dispatch = useDispatch();
	const { loading, error, products } = useSelector((state) => state.products);

	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(getProduct());
	}, [dispatch, error, alert]);

	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<MetaData title="ECOMMERCE" />

					<div className="banner">
						<p>Welcome to Flora</p>
						<h1>FIND AMAZING PRODUCTS BELOW</h1>

						<a href="#container">
							<button>
								Scroll <CgMouse />
							</button>
						</a>
					</div>

					<h2 className="homeHeading">Featured Products</h2>

					<div
						className="container"
						id="container"
					>
						{products &&
							products.slice(0, 10).map((product) => (
								<ProductCard
									key={product._id}
									product={product}
								/>
							))}
					</div>

					<h2 className="homeHeading">Laptops</h2>
					<div
						className="container"
						id="container"
					>
						<HorizontalScroller
							products={products.filter(
								(product) => product.category === "Laptop"
							)}
						/>
					</div>

					<h2 className="homeHeading">SmartPhones</h2>

					<div
						className="container"
						id="container"
					>
						<HorizontalScroller
							products={products.filter(
								(product) => product.category === "SmartPhones"
							)}
						/>
					</div>
					<h2 className="homeHeading">Sports/Shoes/Footwear</h2>

					<div
						className="container"
						id="container"
					>
						<HorizontalScroller
							products={products.filter(
								(product) => product.category === "Footwear"
							)}
						/>
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Home;
