import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// * components
import store, { persistor } from "./app/store(draft)";
import Layout from "./layout";

// import persistProvider from "./redux/redux-persist";
type Props = {};

const App = (props: Props) => {
	return (
		<Provider store={store}>
			<Layout />
			{/* <PersistGate loading={null} persistor={persistor}> */}
			{/* </PersistGate> */}
		</Provider>
	);
};

export default App;
