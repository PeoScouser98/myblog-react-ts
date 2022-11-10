import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer";

const persistConfig = {
	key: "auth",
	storage: storage,
};

export { persistConfig };
