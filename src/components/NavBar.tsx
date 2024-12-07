import { useTranslation } from "../contexts/LangContext";

export default function NavBar() {
	// import des langues et de la fonction permetant de switcher
	const { language, toggleLanguage, translations } = useTranslation();

	// changement du drapeau en fonction du clic
	const toggleFlagStyle =
		language === "fr"
			? "bg-flagfr bg-contain h-8 w-8 bg-center rounded-3xl"
			: "bg-flagen bg-contain bg-cover h-8 w-8 bg-center rounded-3xl";

	// JSX
	return (
		<>
			<nav className="bg-darkcolor flex justify-end items-center gap-3 h-16 sticky top-0 z-50 border-b-2 border-lightcolor">
				<ul className="flex gap-3">
					<li className="text-lightcolor font-titlefont">
						<a href="/#about">{translations.navbar.about}</a>
					</li>
					<li className="text-lightcolor font-titlefont">
						<a href="/#skills">{translations.navbar.skills}</a>
					</li>
					<li className="text-lightcolor font-titlefont">
						<a href="/#projects">{translations.navbar.projects}</a>
					</li>
					<li className="text-lightcolor font-titlefont">
						<a href="/#contacts">{translations.navbar.contact}</a>
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
