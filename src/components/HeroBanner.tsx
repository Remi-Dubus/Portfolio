import { useTranslation } from "../contexts/LangContext";

export default function HeroBanner() {
	const { translations } = useTranslation();
	return (
		<header>
			<h1>{translations.hero.title}</h1>
		</header>
	);
}
