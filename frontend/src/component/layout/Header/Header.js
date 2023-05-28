import React from "react";
// import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import {
	AiOutlineLogin,
	AiOutlineSearch,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions";

// const options = {
// 	burgerColorHover: "#eb4034",
// 	logo: logo,
// 	logoWidth: "20vmax",
// 	navColor1: "white",
// 	logoHoverSize: "10px",
// 	logoHoverColor: "#eb4034",
// 	link1Text: "Home",
// 	link2Text: "Products",
// 	link3Text: "Contact",
// 	link4Text: "About",
// 	link1Url: "/",
// 	link2Url: "/products",
// 	link3Url: "/contact",
// 	link4Url: "/about",
// 	link1Size: "1.3vmax",
// 	link1Color: "rgba(35, 35, 35,0.8)",
// 	nav1justifyContent: "flex-end",
// 	nav2justifyContent: "flex-end",
// 	nav3justifyContent: "flex-start",
// 	nav4justifyContent: "flex-start",
// 	link1ColorHover: "#eb4034",
// 	link1Margin: "1vmax",
// 	profileIconUrl: "/login",
// 	profileIconColor: "rgba(35, 35, 35,0.8)",
// 	searchIconColor: "rgba(35, 35, 35,0.8)",
// 	cartIconColor: "rgba(35, 35, 35,0.8)",
// 	profileIconColorHover: "#eb4034",
// 	searchIconColorHover: "#eb4034",
// 	cartIconColorHover: "#eb4034",
// 	cartIconMargin: "1vmax",
// };

const Header = () => {
	const { cartItems } = useSelector((state) => state.cart);
	const { isAuthenticated, user } = useSelector((state) => state.user);
	return (
		<div className="header">
			<div className="header-left-container">
				<NavLink to={"/"}>
					<div className="img-conatainer">
						<img
							src={logo}
							alt="logo"
						/>
					</div>
				</NavLink>
				<div className="route-container">
					<NavLink
						activeStyle={{
							borderBottom: "solid 3px #4872f0",
							paddingBottom: "1px",
						}}
						exact
						to={"/"}
					>
						Home
					</NavLink>
					<NavLink
						activeStyle={{
							borderBottom: "solid 3px #4872f0",
							paddingBottom: "1px",
						}}
						exact
						to={"/products"}
					>
						Products
					</NavLink>
					<NavLink
						activeStyle={{
							borderBottom: "solid 3px #4872f0",
							paddingBottom: "1px",
						}}
						exact
						to={"/contact"}
					>
						Contact
					</NavLink>
					<NavLink
						activeStyle={{
							borderBottom: "solid 3px #4872f0",
							paddingBottom: "1px",
						}}
						exact
						to={"/about"}
					>
						About
					</NavLink>
				</div>
			</div>
			<div className="icon-container">
				<div>
					<NavLink
						activeStyle={{
							backgroundColor: "#4872f0",
							padding: "5px",
							borderRadius: "2px",
						}}
						exact
						to={"/search"}
					>
						<AiOutlineSearch color="white" />
					</NavLink>
				</div>
				<div className="cart-container">
					<NavLink
						activeStyle={{
							backgroundColor: "#4872f0",
							padding: "5px",
							borderRadius: "2px",
						}}
						exact
						to={"/cart"}
					>
						{isAuthenticated ? (
							cartItems.length > 0 && (
								<div className="cart-item-count">
									{cartItems.length}
								</div>
							)
						) : (
							<></>
						)}
						<AiOutlineShoppingCart color="white" />
					</NavLink>
				</div>
				<div>
					<NavLink
						activeStyle={{
							backgroundColor: "#4872f0",
							padding: "5px",
							borderRadius: "2px",
						}}
						exact
						to={"/login"}
					>
						<AiOutlineLogin color="white" />
					</NavLink>
				</div>
				{isAuthenticated && <UserOptions user={user} />}
			</div>
		</div>
	);
};

export default Header;
