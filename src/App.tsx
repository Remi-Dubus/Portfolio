import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

import { LangProvider } from "./contexts/LangContext";

function App() {
	return (
		<LangProvider>
			<NavBar />
			<Outlet />
			<Footer />
		</LangProvider>
	);
}

export default App;
