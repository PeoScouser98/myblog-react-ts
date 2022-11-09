import { combineReducers } from "redux";
import productReducer from "./post.reducer";

const rootReducer = combineReducers({
	product: productReducer,
});

export default rootReducer;
