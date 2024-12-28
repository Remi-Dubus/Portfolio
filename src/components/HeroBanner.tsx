import { useTranslation } from "../contexts/LangContext";

export default function HeroBanner() {
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	//JSX
	return (
		<header className="h-screen p-4 flex flex-col items-center justify-start overflow-hidden font-maintitlefont text-3xl text-center text-lightcolor sm:pt-80 sm:text-6xl">
			<section className="-mt-64 h-screen w-screen bg-animation bg-no-repeat bg-center animate-spin-slow opacity-50 z-0 bg-contain sm:w-screen sm:h-full sm:-mt-96 lg:absolute lg:w-4/5 lg:top-12">
				{" "}
			</section>
			<section className="absolute top-1/3 lg:top-1/2">
				<h1 className="z-10 inline">{translations.hero.title}</h1>
				<h2 className="z-10 inline text-acccolor">{translations.hero.job}</h2>
			</section>
		</header>
	);
}
