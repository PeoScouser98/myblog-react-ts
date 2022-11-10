import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Sidebar = (props: Props) => {
	return (
		<aside className="h-[inherit] border-r block p-6">
			<ul className="menu gap-4 text-xl">
				<li>
					<Link to="/">Tip</Link>
				</li>
				<li>
					<Link to="/">Tip</Link>
				</li>
				<li>
					<Link to="/">Tip</Link>
				</li>
				<li>
					<Link to="/">Tip</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
