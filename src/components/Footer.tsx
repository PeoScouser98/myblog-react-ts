import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsFacebook } from "react-icons/bs";
type Props = {};

const Footer = (props: Props) => {
	return (
		<footer className="bg-base-300 text-base-content/70 flex justify-end items-center gap-5 p-8">
			<div className="tooltip" data-tip="Github">
				<a href="https://github.com/PeoScouser98/myblog-react-ts" className="text-2xl">
					<BsGithub />
				</a>
			</div>
			<div className="tooltip" data-tip="Facebook">
				<a href="https://www.facebook.com/profile.php?id=100011088817173" className="text-2xl">
					<BsFacebook />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
