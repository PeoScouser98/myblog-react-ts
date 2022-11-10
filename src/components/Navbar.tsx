// * libs
import React, { useEffect, useState } from "react";
import { json, Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// * Components
import {
	HiBars3BottomRight,
	HiCodeBracket,
	HiOutlineHome,
	HiNewspaper,
	HiOutlineChatBubbleLeftRight,
	HiOutlineDocumentText,
} from "react-icons/hi2";
import AccountDropdown from "./AccountDropdown";
import { useAppSelector } from "../app/hooks";

const Navbar = () => {
	const { user } = useAppSelector((state) => state);
	return (
		<header className="w-full navbar px-5">
			<div className="navbar-start px-2 mx-2 text-2xl font-semibold select-none">
				<Link className="font-mono font-bold inline-flex items-center gap-2" to="/">
					{"<CodeWithMe/>"}
				</Link>
			</div>
			<div className="navbar-center flex-1 xs:hidden sm:hidden md:hidden block min-w-[375px] mx-auto">
				<ul className="nav-menu">
					<li>
						<NavLink to="/" className="inline-flex items-center gap-2">
							<HiOutlineHome /> Trang chủ
						</NavLink>
					</li>
					<li>
						<NavLink to="/posts" className="inline-flex items-center gap-2">
							<HiOutlineDocumentText /> Bài viết
						</NavLink>
					</li>
					<li>
						<NavLink to="/blog" className="inline-flex items-center gap-2">
							<HiOutlineChatBubbleLeftRight /> Blog
						</NavLink>
					</li>
				</ul>
			</div>
			<div className="navbar-end">
				{user !== null ? (
					<AccountDropdown userdata={user} />
				) : (
					<div className="inline-flex items-stretch gap-3">
						<Link to="/signin" className="btn btn-primary">
							Sign in
						</Link>
						<Link to="/signin" className="btn btn-outline hover:btn-secondary">
							Sign up
						</Link>
					</div>
				)}
			</div>
			<div className="flex-none hidden xs:block sm:block md:block ml-5">
				<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
					<HiBars3BottomRight className="text-xl" />
				</label>
			</div>
		</header>
	);
};

export default Navbar;
