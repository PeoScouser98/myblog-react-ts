export type SigninData = {
	email: string;
	password: string;
};

export type UserData = {
	accessToken: string;
	user: {
		id: string;
		email: string;
		username: string;
		role: string | number;
	};
};

export type UserActions = {
	type: string;
	payload: UserData | null;
};

const initialState = null;

const userReducer = (state = initialState, action: UserActions) => {
	const { type, payload } = action;
	switch (type) {
		case "SIGNIN":
			console.log(payload);
			return { loginStatus: true, ...payload };
		case "SIGNOUT":
			return null;
		default:
			return state;
	}
};

export default userReducer;
