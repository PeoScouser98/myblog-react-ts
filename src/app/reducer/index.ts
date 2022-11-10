import { combineReducers } from "redux";
import userReducer from "./auth.reducer";
import productReducer from "./post.reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	user: userReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
