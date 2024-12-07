import { NavLink } from "react-router-dom";
import { useTranslation } from "../contexts/LangContext";

export default function Footer() {
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	//JSX
	return (
		<>
			<footer className="bg-darkcolor bg-cover flex flex-col justify-center items-center h-32 border-t-2 border-lightcolor">
				<span className="text-lightcolor">&copy; 2024 Rémi Dubus.</span>
				<span className="text-center text-lightcolor">
					{translations.footer.copyrigthText}{" "}
					<NavLink className="text-acccolor" to="http://www.freepik.com">
						{translations.footer.copyrigthLink}
					</NavLink>
				</span>
			</footer>
		</>
	);
}
