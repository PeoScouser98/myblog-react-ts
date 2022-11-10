// * Libs
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { HiOutlineHome, HiNewspaper, HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
// * Components
type Props = {};

const DrawerSide = (props: Props) => {
	return (
		<div className="drawer-side">
			<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
			<ul className="menu p-4 w-80 bg-base-100">
				<li>
					<Link to="/">
						<HiOutlineHome /> Home
					</Link>
				</li>
				<li>
					<Link to="/posts">
						<HiNewspaper /> Posts
					</Link>
				</li>
				<li>
					<Link to="/contact">
						<HiOutlineChatBubbleLeftRight /> Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default DrawerSide;
