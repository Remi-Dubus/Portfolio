import { useTranslation } from "../contexts/LangContext";
import profilePhoto from "../assets/images/remidubus.jpg";
import gitLogo from "../assets/images/git-logo.png";
import htmlLogo from "../assets/images/html-logo.png";
import cssLogo from "../assets/images/css-logo.png";
import nodeLogo from "../assets/images/node-logo.png";
import reactLogo from "../assets/images/react-logo.png";
import viteLogo from "../assets/images/vite-logo.png";
import tailwindLogo from "../assets/images/tailwind-logo.png";
import expressLogo from "../assets/images/express-logo.png";
import mysqlLogo from "../assets/images/mysql-logo.webp";
import figmaLogo from "../assets/images/figma-logo.png";

export default function About() {
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	// tableaux des logos des skills
	const arrayOfLogo = [
		gitLogo,
		htmlLogo,
		cssLogo,
		nodeLogo,
		reactLogo,
		viteLogo,
		tailwindLogo,
		expressLogo,
		mysqlLogo,
		figmaLogo,
	];

	// tableaux des noms des skills
	const arrayOfSkills = translations.about.skillArray;

	// JSX
	return (
		<article id="about" className="flex flex-col gap-2">
			<section className="mt-20 p-4 flex flex-col items-center gap-2 bg-black bg-opacity-50 rounded-lg">
				<h2 className="text-lightcolor text-2xl font-titlefont z-10">
					{translations.about.aboutTitle}
				</h2>
				<img
					src={profilePhoto}
					alt="Rémi Dubus"
					className="w-36 h-36 rounded-full z-10 my-4 border-2 border-lightcolor "
				/>
				<p className="text-lightcolor font-textfont z-10">
					{translations.about.aboutText}
				</p>
			</section>
			<section
				id="skills"
				className="mt-20 p-8 grid grid-cols-2 items-center gap-8 bg-black bg-opacity-50 rounded-lg"
			>
				<h2 className="text-lightcolor text-2xl col-span-2 font-titlefont text-center  z-10 ">
					{translations.about.skillTitle}
				</h2>
				{arrayOfLogo.map((l, i) => (
					<figure key={arrayOfSkills[i]}>
						<img src={l} alt={arrayOfSkills[i]} />
						<figcaption className="text-lightcolor font-textfont z-10 text-center mt-4">
							{arrayOfSkills[i]}
						</figcaption>
					</figure>
				))}
			</section>
			<section className="mt-20 p-4 flex flex-col items-center gap-2  bg-black bg-opacity-50  rounded-lg">
				<h2 className="text-lightcolor text-2xl font-titlefont  mb-4">
					{translations.about.hobbiesTitle}
				</h2>
				<p className="text-lightcolor font-textfont">
					{translations.about.hobbiesText}
				</p>
			</section>
		</article>
	);
}
