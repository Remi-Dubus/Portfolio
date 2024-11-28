import About from "../components/About";
import HeroBanner from "../components/HeroBanner";

export default function HomePage() {
	return (
		<>
			<main className="bg-main bg-cover h-auto">
				<HeroBanner />
				<About />
			</main>
		</>
	);
}
