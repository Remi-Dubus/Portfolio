import Slider from "react-slick";
import { useTranslation } from "../contexts/LangContext";

import ProjectsCard from "./ProjectCard";

import croustiEatPicture from "../assets/images/crouti-eat-picture.png";
import buyAPlanetPicture from "../assets/images/buy-a-planet-picture.png";
import boarderLinePicture from "../assets/images/borderline-picture.png";
import eshopPicture from "../assets/images/eshop-picture.png";

export default function Projects() {
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		autoplaySpeed: 5000,
		draggable: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	// import des langues et de la fonction permetant de switcher
	const { translations } = useTranslation();

	// Tableau des projets
	const arrayOfSites = [
		{
			alt: translations.project.croustiEatAlt,
			text: translations.project.croustiEatText,
			url: translations.project.croustiEatUrl,
			picture: croustiEatPicture,
		},
		{
			alt: translations.project.buyAPlanetAlt,
			text: translations.project.buyAPlanetText,
			url: translations.project.buyAPlanetUrl,
			picture: buyAPlanetPicture,
		},
		{
			alt: translations.project.eshopAlt,
			text: translations.project.eshopText,
			url: translations.project.eshopUrl,
			picture: eshopPicture,
		},
		{
			alt: translations.project.boarderlineAlt,
			text: translations.project.boarderlineText,
			url: translations.project.boarderlineUrl,
			picture: boarderLinePicture,
		},
	];

	// JSX
	return (
		<article
			id="projects"
			className="mx-4 flex flex-col gap-4 mt-20 pt-4 px-4 pb-12 h-auto bg-slate-700 bg-opacity-50 rounded-lg lg:mx-8 lg:py-16"
		>
			<h1 className="text-lightcolor text-2xl font-titlefont text-center mb-4 mx-16 sm:text-5xl">
				Projets
			</h1>
			<Slider {...settings}>
				{arrayOfSites.map((w) => (
					<ProjectsCard
						alt={w.alt}
						key={w.alt}
						text={w.text}
						url={w.url}
						picture={w.picture}
					/>
				))}
			</Slider>
		</article>
	);
}
