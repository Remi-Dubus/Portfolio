import { NavLink } from "react-router-dom";
import { useTranslation } from "../contexts/LangContext";

export default function NavBar() {
	const { language, toggleLanguage, translations } = useTranslation();
	const toggleFlagStyle =
		language === "fr"
			? "bg-flagfr bg-contain h-8 w-8 bg-center rounded-3xl"
			: "bg-flagen bg-contain bg-cover h-8 w-8 bg-center rounded-3xl";
	return (
		<>
			<nav className="bg-darkcolor flex justify-end items-center gap-3 h-16">
				<ul className="flex gap-3">
					<li className="text-lightcolor font-titlefont">
						<NavLink to="/">{translations.navbar.home}</NavLink>
					</li>
					<li className="text-lightcolor font-titlefont">
						<NavLink to="/">{translations.navbar.about}</NavLink>
					</li>
					<li className="text-lightcolor font-titlefont">
						<NavLink to="#contact">{translations.navbar.contact}</NavLink>
					</li>
					<li className="text-lightcolor font-titlefont">
						<NavLink to="/project">{translations.navbar.projects}</NavLink>
					</li>
				</ul>
				<button
					type="button"
					className={toggleFlagStyle}
					onClick={toggleLanguage}
				>
					{" "}
				</button>
			</nav>
		</>
	);
}
