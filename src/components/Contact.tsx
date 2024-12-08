import { NavLink } from "react-router-dom";
import { useTranslation } from "../contexts/LangContext";

export default function Contact() {
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	// JSX
	return (
		<article
			id="contacts"
			className="flex flex-col gap-2 items-center bg-black bg-opacity-50 p-4 mt-24 rounded-lg "
		>
			<h2 className="text-lightcolor text-2xl font-titlefont">
				{translations.contact.contactTitle}
			</h2>
			<p className="text-lightcolor font-textfont">
				{translations.contact.contactMail}
			</p>
			<NavLink to="https://www.linkedin.com/in/r%C3%A9mi-dubus/">
				<p className="text-acccolor font-textfont">
					{translations.contact.contactLinkedin}{" "}
				</p>
			</NavLink>
			<NavLink to="https://github.com/Remi-Dubus">
				<p className="text-acccolor font-textfont">
					{translations.contact.contactGithub}
				</p>
			</NavLink>
		</article>
	);
}
