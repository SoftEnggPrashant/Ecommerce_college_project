import "./HorizontalScroller.css";
import { useState, useRef } from "react";
import gsap from "gsap";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ProductCard from "./ProductCard";

export default function HorizontalScroller({ products }) {
	let scrl = useRef(null);
	const [scrollX, setscrollX] = useState(0);
	const [scrolEnd, setscrolEnd] = useState(false);

	//Slide click
	const slide = (shift) => {
		scrl.current.scrollLeft += shift;
		setscrollX(scrollX + shift);

		if (
			Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
			scrl.current.offsetWidth
		) {
			setscrolEnd(true);
		} else {
			setscrolEnd(false);
		}
	};

	//Anim
	const anim = (e) => {
		gsap.from(e.target, { scale: 1 });
		gsap.to(e.target, { scale: 1.5 });
	};
	const anim2 = (e) => {
		gsap.from(e.target, { scale: 1.5 });
		gsap.to(e.target, { scale: 1 });
	};

	const scrollCheck = () => {
		setscrollX(scrl.current.scrollLeft);
		if (
			Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
			scrl.current.offsetWidth
		) {
			setscrolEnd(true);
		} else {
			setscrolEnd(false);
		}
	};

	return (
		<div className="App">
			{scrollX !== 0 && (
				<button
					className="prev"
					onClick={() => slide(-250)}
					onMouseEnter={(e) => anim(e)}
					onMouseLeave={(e) => anim2(e)}
				>
					<BiChevronLeft />
				</button>
			)}
			<ul
				ref={scrl}
				onScroll={scrollCheck}
			>
				{products &&
					products.map((product) => (
						<ProductCard
							key={product._id}
							product={product}
						/>
					))}
			</ul>
			{!scrolEnd && (
				<button
					className="next"
					onClick={() => slide(+250)}
					onMouseEnter={(e) => anim(e)}
					onMouseLeave={(e) => anim2(e)}
				>
					<BiChevronRight />
				</button>
			)}
		</div>
	);
}
