type Post = {
	id: string;
	title: string;
	price: number;
};
type Action = {
	type: string;
	payload: Post;
};

const postReducer = (state: Post[] = [], action: Action) => {
	const { type, payload } = action;
	switch (type) {
		case "GET_POST":
			return state;
		case "CREATE_POST":
			return [...[state], payload];
		case "UPDATE_POST":
			return state.map((item) => (item.id === payload.id ? payload : item));
		case "DELETE_POST":
			return state.filter((item) => item.id !== payload.id);
		default:
			return state;
	}
};
export default postReducer;
