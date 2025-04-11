import { NavLink } from "react-router-dom";
import { useTranslation } from "../contexts/LangContext";

import mailLogo from "../assets/images/mail-logo.png";
import linkedinLogo from "../assets/images/linkedin-logo.png";
import githubLogo from "../assets/images/github-logo.png";

export default function Contact() {
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	// tableau des contacts
	const arrayOfContacts = [
		{
			name: translations.contact.contactMail,
			picture: mailLogo,
			link: "#",
		},
		{
			name: translations.contact.contactLinkedin,
			picture: linkedinLogo,
			link: translations.contact.contactLinkedinLink,
		},
		{
			name: translations.contact.contactGithub,
			picture: githubLogo,
			link: translations.contact.contactGithubLink,
		},
	];

	// JSX
	return (
		<article
			id="contact"
			className="mx-4 flex flex-col gap-2 items-center bg-slate-700 bg-opacity-50 p-4 mt-24 rounded-lg lg:mx-8 lg:p-16"
		>
			<h2 className="text-lightcolor text-2xl mb-4 font-titlefont text-center z-10 sm:text-5xl">
				{translations.contact.contactTitle}
			</h2>
			<section className="flex flex-col gap-4 lg:flex-row lg:gap-16">
				{arrayOfContacts.map((c) => (
					<figure key={c.name} className="flex gap-2">
						<img src={c.picture} alt={`logo ${c.name}`} className="h-8" />
						<NavLink to={c.link}>
							<figcaption className="text-acccolor font-textfont sm:text-3xl ">
								{c.name}
							</figcaption>
						</NavLink>
					</figure>
				))}
			</section>
			<h2 className="text-lightcolor text-2xl mb-4 mt-8 font-titlefont text-center z-10 sm:text-5xl">
				{translations.contact.contactDownloadCV}
			</h2>
		</article>
	);
}
