import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

import { LangProvider } from "./contexts/LangContext";

function App() {
	return (
		<LangProvider>
			<div className=" h-full w-full bg-mainmobile bg-cover bg-no-repeat bg-center bg-blend-multiply bg-inherit -top-1/2 animate-spin-slow opacity-50 absolute z-0 sm:bg-main sm:bg-contain  ">
				{" "}
			</div>
			<NavBar />
			<Outlet />
			<Footer />
		</LangProvider>
	);
}

export default App;
