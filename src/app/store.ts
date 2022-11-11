import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
// import { persistor } from './[draft]store';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./slice/user.slice";
import { persistConfig } from "./redux-persist";

const store = configureStore({
	// reducers
	reducer: {
		user: userReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
// const persistedReducer = persistReducer(persistConfig, store);
// export const persistor = persistStore(store,)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type DispatchAction = ReturnType<typeof store.dispatch>;
export default store;
