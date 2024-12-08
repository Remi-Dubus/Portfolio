import HeroBanner from "../components/HeroBanner";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function HomePage() {
	return (
		<>
			<main className="bg-darkcolor p-4">
				<HeroBanner />
				<About />
				<Projects />
				<Contact />
			</main>
		</>
	);
}
