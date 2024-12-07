import { useTranslation } from "../contexts/LangContext";
import profilePhoto from "../assets/images/remidubus.jpg";

export default function About() {
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	// JSX
	return (
		<article id="about" className="flex flex-col gap-2">
			<section className="mx-5 mt-20 flex flex-col items-center gap-2">
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
			<section id="skills" className="mx-5 flex flex-col items-center gap-2">
				<h2 className="text-lightcolor text-2xl font-titlefont mt-20 z-10">
					{translations.about.skillTitle}
				</h2>
			</section>
			<section className="mx-5  flex flex-col items-center gap-2">
				<h2 className="text-lightcolor text-2xl font-titlefont mt-20">
					{translations.about.hobbiesTitle}
				</h2>
				<p className="text-lightcolor font-textfont">
					{translations.about.hobbiesText}
				</p>
			</section>
		</article>
	);
}
