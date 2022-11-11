import React from "react";
import { HiCodeBracket } from "react-icons/hi2";
type Props = {};

const Logo = (props: Props) => {
	return (
		<div className="flex items-center gap-3">
			<HiCodeBracket className="text-4xl text-primary font-bold" />
			<div className="flex flex-col gap-0">
				<span className="text-xl font-bold font-mono">Poly Javascript</span>
				<span className="text-base">Blog</span>
			</div>
		</div>
	);
};

export default Logo;
