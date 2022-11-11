// import { RootState } from "@/app/[draft]store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userAPI from "../../api/auth.api";
// import { asyncSigninThunk } from "../middleware/user.middleware";

const asyncSigninThunk = createAsyncThunk("user/signin", async (data: { email: string; password: string }) => {
	try {
		console.log("input:>>", data); // passed
		const userData = await userAPI.signin(data);
		console.log("output:>>", userData); // passed
		return userData;
	} catch (error: any) {
		return error;
	}
});

type UserState = {
	error: string | any;
	currentUser: {
		accessToken: string;
		user: {
			email: string;
			username: string;
			role: string;
			id: string | number;
		};
	};
};

const initialState = {
	error: "",
	currentUser: null as UserState | null,
};
const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	reducers: {
		// synchronus reducer case
		logout: () => initialState,
	},
	// handle async actions
	extraReducers: (builder) => {
		builder.addCase(asyncSigninThunk.fulfilled, (state: UserState | any, action) => {
			console.log("data from middleware:>>", action.payload);
			// ? do reset state
			state.currentUser = action.payload;
		});
		builder.addCase(asyncSigninThunk.rejected, (state: UserState | any, action) => {
			state.error = action.payload;
		});
	},
});
export { asyncSigninThunk };

export const { logout } = userSlice.actions;
export default userSlice.reducer;
