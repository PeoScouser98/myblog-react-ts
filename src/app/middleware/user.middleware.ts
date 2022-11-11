import { createAsyncThunk } from "@reduxjs/toolkit";
import * as userAPI from "../../api/auth.api";
const asyncSigninThunk = createAsyncThunk("user/signin", async (data: any) => {
	console.log(data);
	const userData = await userAPI.signin(data);
	return userData;
});

export { asyncSigninThunk };
