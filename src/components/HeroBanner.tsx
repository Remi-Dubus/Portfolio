import { useTranslation } from "../contexts/LangContext";

export default function HeroBanner() {
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	//JSX
	return (
		<header className="h-screen pt-40 flex flex-col font-maintitlefont text-3xl text-center text-lightcolor sm:pt-80 sm:text-6xl">
			<section>
				<h1 className="z-10 inline">{translations.hero.title}</h1>
				<h2 className="z-10 inline text-acccolor">{translations.hero.job}</h2>
			</section>
		</header>
	);
}
