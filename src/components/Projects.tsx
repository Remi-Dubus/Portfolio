import Slider from "react-slick";
import ProjectsCard from "./ProjectCard";
import croustiEatPicture from "../assets/images/crouti-eat-picture.png";
import buyAPlanetPicture from "../assets/images/buy-a-planet-picture.png";
import boarderLinePicture from "../assets/images/borderline-picture.png";

export default function Projects() {
	const settings = {
		arrows: false,
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		draggable: true,
	};
	return (
		<article id="projects" className="flex flex-col gap-2 p-2 h-96">
			<h1 className="text-lightcolor text-2xl font-titlefont text-center mt-20 mx-16">
				Projets
			</h1>
			<Slider {...settings} className="h-2/3">
				<ProjectsCard image={croustiEatPicture} />
				<ProjectsCard image={buyAPlanetPicture} />
				<ProjectsCard image={boarderLinePicture} />
			</Slider>
		</article>
	);
}
