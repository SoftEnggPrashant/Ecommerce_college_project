import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
	return (
		<div className="aboutSection">
			<div></div>
			<div className="aboutSectionGradient"></div>
			<div className="aboutSectionContainer">
				<Typography component="h1">About Us</Typography>

				<div>
					<div>
						<Avatar
							style={{
								width: "10vmax",
								height: "10vmax",
								margin: "2vmax 0",
							}}
							src="https://res.cloudinary.com/dfsedjuof/image/upload/v1674332301/avatars/ipoi8x76vdkyxidgjogb.jpg"
							alt="Founder"
						/>
						<Typography>PrashantRajpoot</Typography>
						<Button color="primary">Visit Instagram</Button>
						<span>
							This is a sample wesbite made by @meprashantrajpoot.
							Only with the purpose to how to work the Ecommerce
							website.
						</span>
					</div>
					<div className="aboutSectionContainer2">
						<Typography component="h2">Our Brands</Typography>
						<a
							href="https://www.youtube.com"
							target="blank"
						>
							<YouTubeIcon className="youtubeSvgIcon" />
						</a>

						<a
							href="https://instagram.com"
							target="blank"
						>
							<InstagramIcon className="instagramSvgIcon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
