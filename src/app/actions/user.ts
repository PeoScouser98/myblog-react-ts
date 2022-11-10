import { UserData } from "@/app/reducer/auth.reducer";
import { UserActions } from "./../reducer/auth.reducer";
import * as User from "../../api/auth";
import { AppDispatch, DispatchAction } from "../store";

const signin = (data: any) => async (dispatch: AppDispatch) => {
	try {
		const userData = await User.signin(data);
		dispatch<UserActions>({ type: "SIGNIN", payload: userData });
	} catch (error) {
		console.warn(error);
	}
};

export { signin };
