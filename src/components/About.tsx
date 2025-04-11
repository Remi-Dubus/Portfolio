import { useTranslation } from "../contexts/LangContext";

import profilePhoto from "../assets/images/remidubus.png";
import gitLogo from "../assets/images/git-logo.png";
import htmlLogo from "../assets/images/html-logo.png";
import cssLogo from "../assets/images/css-logo.png";
import nodeLogo from "../assets/images/node-logo.png";
import typescriptLogo from "../assets/images/typescript-logo.png";
import reactLogo from "../assets/images/react-logo.png";
import viteLogo from "../assets/images/vite-logo.png";
import tailwindLogo from "../assets/images/tailwind-logo.png";
import expressLogo from "../assets/images/express-logo.png";
import mysqlLogo from "../assets/images/mysql-logo.webp";
import figmaLogo from "../assets/images/figma-logo.png";
import nextJsLogo from "../assets/images/next-logo.png";
import agileLogo from "../assets/images/agile-logo.png";

export default function About() {
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	// tableaux des logos des skills
	const arrayOfLogo = [
		gitLogo,
		htmlLogo,
		cssLogo,
		nodeLogo,
		typescriptLogo,
		reactLogo,
		viteLogo,
		tailwindLogo,
		expressLogo,
		mysqlLogo,
		nextJsLogo,
		figmaLogo,
		agileLogo,
	];

	// tableaux des noms des skills
	const arrayOfSkills = translations.about.skillArray;

	// JSX
	return (
		<article
			id="about"
			className="flex flex-col gap-4 lg:grid lg:grid-cols-2 lg:gap-8"
		>
			<section className="mx-4 mt-10 p-4 flex flex-col justify-start items-center gap-4 bg-slate-700 bg-opacity-50 rounded-lg lg:ml-8 lg:mr-0 lg:px-28">
				<h2 className="text-lightcolor mt-6 text-2xl font-titlefont z-10 sm:text-5xl">
					{translations.about.aboutTitle}
				</h2>
				<figure className="flex flex-col items-center sm:flex-row sm:justify-around lg:my-auto lg:block">
					<img
						src={profilePhoto}
						alt="Rémi Dubus"
						className="w-36 h-36 rounded-full z-10 my-4 border-4 border-lightcolor sm:h-52 sm:w-52 lg:float-left lg:mr-8"
					/>
					<figcaption className="text-lightcolor font-textfont z-10 sm:text-3xl sm:w-1/2 sm:my-4 lg:my-12 lg:w-fit">
						<p>{translations.about.aboutTextPart1}</p>
						<p className="mt-4 lg:mt-8">{translations.about.aboutTextPart2}</p>
						<p className="mt-4 lg:mt-8">{translations.about.aboutTextPart3}</p>
						<p className="mt-4 lg:mt-8">{translations.about.aboutTextPart4}</p>
					</figcaption>
				</figure>
			</section>

			<section
				id="skills"
				className="mx-4 mt-10 p-8 grid grid-cols-3 items-center gap-4 bg-slate-700 bg-opacity-50 rounded-lg lg:mr-8 lg:ml-0 lg:grid-cols-3"
			>
				<h2 className="text-lightcolor mb-8 text-2xl col-span-3 font-titlefont text-center z-10 sm:text-5xl lg:col-span-3">
					{translations.about.skillTitle}
				</h2>
				{arrayOfLogo.map((l, i) => (
					<figure
						key={arrayOfSkills[i]}
						className="flex flex-col justify-center items-center"
					>
						<img
							src={l}
							alt={arrayOfSkills[i]}
							className="min-h-12 max-h-12 min-w-12 max-w-12 sm:min-h-20 sm:max-h-20 sm:min-w-20 sm:max-w-20"
						/>
						<figcaption className="text-lightcolor font-textfont z-10 text-center mt-4 sm:text-3xl">
							{arrayOfSkills[i]}
						</figcaption>
					</figure>
				))}
			</section>

			<section className="mx-4 mt-20 p-4 flex flex-col items-center gap-2 bg-slate-700 bg-opacity-50 rounded-lg lg:col-span-2 lg:mt-0 lg:mx-8 lg:py-16">
				<h2 className="text-lightcolor text-2xl font-titlefont mb-4 sm:text-5xl">
					{translations.about.hobbiesTitle}
				</h2>
				<p className="text-lightcolor font-textfont sm:text-3xl sm:p-4">
					{translations.about.hobbiesText}
				</p>
			</section>
		</article>
	);
}
