import { useTranslation } from "../contexts/LangContext";

export default function HeroBanner() {
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	//JSX
	return (
		<header className="h-96 p-4 flex flex-col items-center justify-start overflow-hidden font-maintitlefont text-3xl text-center text-lightcolor sm:pt-80 sm:text-6xl sm:h-screen">
			<section className="-mt-48 h-screen w-screen bg-main bg-no-repeat bg-center animate-spin-slow opacity-40 z-0 bg-contain sm:w-screen sm:h-full sm:-mt-96 lg:absolute lg:w-4/5 lg:-top-0.5">
				{" "}
			</section>
			<section className="absolute top-48  sm:top-96">
				<h1 className="z-10 inline">{translations.hero.title}</h1>
				<h2 className="z-10 inline text-acccolor">{translations.hero.job}</h2>
			</section>
		</header>
	);
}
