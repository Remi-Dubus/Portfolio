import HeroBanner from "../components/HeroBanner";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function HomePage() {
	return (
		<>
			<main className="bg-main  bg-darkcolor bg-cover bg-fixed pb-4 sm:pb-20">
				<HeroBanner />
				<Projects />
				<Contact />
			</main>
		</>
	);
}
