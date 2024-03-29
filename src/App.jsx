import "./App.css";
import Body from "./layout/Body";
import { Button } from "./components/ui/button";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";

function App() {
	return (
		<>
			<Provider store={appStore}>
				<Body />
			</Provider>
		</>
	);
}

export default App;
