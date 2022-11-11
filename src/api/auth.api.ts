import instance from "./axios.config";
import { SigninData, UserData } from "@/app/reducer(draft)/auth.reducer";

export const signin = async (payload: SigninData): Promise<UserData> => {
	return await instance.post("/signin", payload);
};

export const signup = async (payload: UserData): Promise<UserData> => {
	return await instance.post("/signup", payload);
};
