import NavBar from "./components/NavBar";
import NewPortfolioLink from "./components/NewPortfolioLink";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

import { LangProvider } from "./contexts/LangContext";

function App() {
	return (
		<LangProvider>
			<NavBar />
			<NewPortfolioLink />
			<Outlet />
			<Footer />
		</LangProvider>
	);
}

export default App;
