import HeroBanner from "../components/HeroBanner";
import About from "../components/About";
import Contact from "../components/Contact";

export default function HomePage() {
	return (
		<>
			<main className="bg-main  bg-darkcolor bg-cover bg-fixed pb-4 sm:pb-20">
				<HeroBanner />
				<About />
				<Contact />
			</main>
		</>
	);
}
