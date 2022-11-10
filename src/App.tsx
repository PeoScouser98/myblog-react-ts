import React from "react";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

// * components
import DrawerSide from "./components/DrawerSide";
import Navbar from "./components/Navbar";
import store, { persistor } from "./app/store";
import Layout from "./layout";
// import persistProvider from "./redux/redux-persist";
type Props = {};

const App = (props: Props) => {
	// const { persistor } = persistProvider();
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Layout />
			</PersistGate>
		</Provider>
	);
};

export default App;
