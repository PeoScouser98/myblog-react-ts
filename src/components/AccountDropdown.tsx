import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../app/store(draft)";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { UserActions } from "@/app/reducer(draft)/auth.reducer";
import { HiOutlineChevronDown } from "react-icons/hi2";
const AccountDropdown = (userdata: any) => {
	const { user }: any = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const handleSignout = (): void => {
		dispatch<UserActions>({ type: "SIGNOUT", payload: null });
	};
	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="inline-flex items-center gap-3 rounded-lg shadow-2xl p-2 bg-base-100">
				<img src="https://placeimg.com/80/80/people" className="w-12 rounded-full" />
				<span className="flex flex-col gap-1 justify-center">
					<span className="font-semibold text-base-content">{user.username}</span>
					<span className="text-base-content/70">{user.role}</span>
				</span>
				<HiOutlineChevronDown className="self-start translate-y-2" />
			</label>
			<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
				<li>
					<a className="justify-between">Profile</a>
				</li>
				<li>
					<a>Settings</a>
				</li>
				<li>
					<a onClick={handleSignout}>Logout</a>
				</li>
			</ul>
		</div>
	);
};

export default AccountDropdown;
