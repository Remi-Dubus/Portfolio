import { useTranslation } from "../contexts/LangContext";

export default function NewPortfolioLink() {
	const { translations } = useTranslation();

	return (
		<section className="h-[50px] sm:h-[70px] sm:w-[400px] border-2 border-lightcolor sm:text-xl sm:p-1.5 sm:right-2 lg:right-4 lg:top-36 px-2 text-center w-[280px] shadow-lg shadow-black bg-darkcolor z-50 rounded-lg font-textfont outline-2 fixed top-20 right-1">
			<p className="inline text-lightcolor">
				{translations.newPortfolioLink.portfolioText}
			</p>
			<a
				href="https://www.remi-dubus.fr"
				target="_blank"
				rel="noopener noreferrer"
				className="my-auto text-acccolor hover:text-cyan-300 active:text-cyan-600"
			>
				{translations.newPortfolioLink.portfolioLink}
			</a>
			.
		</section>
	);
}
