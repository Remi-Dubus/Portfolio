import { useTranslation } from "../contexts/LangContext";

export default function About() {
	const { translations } = useTranslation();
	return (
		<article>
			<section>
				<h2>{translations.about.aboutTitle}</h2>
				<p>{translations.about.aboutText}</p>
			</section>
			<section>
				<h2>{translations.about.skillTitle}</h2>
				<p>{translations.about.skillText}</p>
			</section>
			<section id="about">
				<h2>{translations.about.hobbiesTitle}</h2>
				<p>{translations.about.hobbiesText}</p>
			</section>
		</article>
	);
}
