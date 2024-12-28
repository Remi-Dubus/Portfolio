import { NavLink } from "react-router-dom";
import { useTranslation } from "../contexts/LangContext";

export default function Footer() {
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	//JSX
	return (
		<>
			<footer className="bg-darkcolor bg-cover flex flex-col justify-center items-center h-32 border-t-2 border-lightcolor sm:text-3xl sm:h-64">
				<span className="text-lightcolor font-textfont">
					&copy; 2024 Rémi Dubuss.
				</span>
				<span className="text-center text-lightcolor font-textfont">
					{translations.footer.copyrigthText}{" "}
					<NavLink
						className="text-acccolor font-textfont"
						to="http://www.freepik.com"
					>
						{translations.footer.copyrigthLink}
					</NavLink>
				</span>
			</footer>
		</>
	);
}
