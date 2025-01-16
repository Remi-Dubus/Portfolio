import { useTranslation } from "../contexts/LangContext";

export default function HeroBanner() {
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	//JSX
	return (
		<header className="h-screen p-4 flex flex-col items-center justify-start overflow-hidden font-maintitlefont text-3xl text-center text-lightcolor sm:pt-80 sm:text-6xl">
			<section className="-mt-[1025px] h-[1700px] w-[1700px] bg-animation bg-no-repeat bg-center  animate-spin-slow opacity-25 z-0 bg-contain md:-mt-[1700px] md:h-[2200px] md:w-[2200px]">
				{" "}
			</section>
			<section className="absolute top-1/3 lg:top-1/2">
				<h1 className="z-10 inline">{translations.hero.title}</h1>
				<h2 className="z-10 inline text-acccolor">{translations.hero.job}</h2>
			</section>
		</header>
	);
}
