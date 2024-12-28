import { useTranslation } from "../contexts/LangContext";

export default function NavBar() {
	// import des langues et de la fonction permetant de switcher
	const { language, toggleLanguage, translations } = useTranslation();

	// changement du drapeau en fonction du clic
	const toggleFlagStyle =
		language === "fr"
			? "bg-flagfr border-2 border-lightcolor hover:border-acccolor bg-contain h-8 w-10 bg-center rounded-3xl mr-2 sm:mr-8 sm:h-12 sm:w-16"
			: "bg-flagen border-2 border-lightcolor hover:border-acccolor bg-contain bg-cover h-8 w-10 bg-center rounded-3xl mr-2 sm:mr-8 sm:h-12 sm:w-16";

	// tableau des liens
	const arrayOfLinks = [
		{
			name: translations.navbar.about,
			link: translations.navbar.aboutLink,
		},
		{
			name: translations.navbar.projects,
			link: translations.navbar.projectsLink,
		},
		{
			name: translations.navbar.contact,
			link: translations.navbar.contactLink,
		},
	];

	// JSX
	return (
		<>
			<nav className="bg-darkcolor flex justify-end items-center gap-4 h-16 sticky top-0 z-50 border-b-2 border-lightcolor sm:h-24 sm:gap-10">
				<ul className="flex ml-3 gap-4 w-full justify-around sm:gap-12">
					{arrayOfLinks.map((l) => (
						<li
							className="text-lightcolor font-titlefont sm:text-3xl hover:text-acccolor"
							key={l.name}
						>
							<a href={l.link}>{l.name}</a>
							<p>d</p>{" "}
						</li>
					))}
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
