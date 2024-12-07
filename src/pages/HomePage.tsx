import About from "../components/About";
import Contact from "../components/Contact";
import HeroBanner from "../components/HeroBanner";
import Projects from "../components/Projects";

export default function HomePage() {
	return (
		<>
			<main className="bg-darkcolor">
				<HeroBanner />
				<About />
				<Projects />
				<Contact />
			</main>
		</>
	);
}
