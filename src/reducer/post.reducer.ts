type Post = {
	id: string;
	title: string;
	price: number;
};
type Action = {
	type: string;
	payload: Post;
};
const postReducer = (initState: Post[], action: Action) => {
	const { type, payload } = action;
	switch (type) {
		case "GET_POST":
			return initState;
		case "CREATE_POST":
			return [...[initState], payload];
		case "UPDATE_POST":
			return initState.map((item) => (item.id === payload.id ? payload : item));
		case "DELETE_POST":
			return initState.filter((item) => item.id !== payload.id);
		default:
			return initState;
	}
};
export default postReducer;
