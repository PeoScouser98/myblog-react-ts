import { UserActions } from "../reducer(draft)/auth.reducer";
import * as User from "../../api/auth.api";
import { AppDispatch } from "../store(draft)";
import { createSlice } from "@reduxjs/toolkit";

const signin = (data: any) => async (dispatch: AppDispatch) => {
	try {
		const userData = await User.signin(data);
		dispatch<UserActions>({ type: "SIGNIN", payload: userData });
	} catch (error) {
		console.warn(error);
	}
};

export { signin };
