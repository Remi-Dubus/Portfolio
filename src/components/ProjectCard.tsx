import { NavLink } from "react-router-dom";

export default function ProjectsCard({
	alt,
	text,
	url,
	picture,
}: { alt: string; text: string; url: string; picture: string }) {
	return (
		// JSX
		<NavLink to={url}>
			<figure className="h-full rounded">
				<img
					src={picture}
					alt={alt}
					className="h-40 rounded-lg border-2 border-lightcolor"
				/>
				<figcaption className="p-2 text-lightcolor font-textfont bottom-4 h-full">
					{text}
				</figcaption>
			</figure>
		</NavLink>
	);
}
