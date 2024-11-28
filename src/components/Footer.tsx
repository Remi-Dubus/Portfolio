import { NavLink } from "react-router-dom";
import { useTranslation } from "../contexts/LangContext";

export default function Footer() {
	const { translations } = useTranslation();
	return (
		<>
			<footer className="bg-slate-950 bg-cover flex flex-col justify-center items-center h-32">
				<span className="text-lightcolor">&copy; 2024 Rémi Dubus.</span>
				<span className="text-center text-lightcolor">
					{translations.footer.copyrigthText}{" "}
					<NavLink className="text-acccolor" to="http://www.freepik.com">
						{translations.footer.copyrigthLink}
					</NavLink>
				</span>
			</footer>
		</>
	);
}
