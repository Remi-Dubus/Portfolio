import { NavLink } from "react-router-dom";

export default function ProjectsCard({
	alt,
	text,
	url,
	picture,
}: { alt: string; text: string; url: string; picture: string }) {
	// JSX
	return (
		<NavLink to={url}>
			<figure className="h-1/3 rounded">
				<img
					src={picture}
					alt={alt}
					className="h-auto rounded-lg border-2 border-lightcolor hover:border-acccolor"
				/>
				<figcaption className=" text-lightcolor font-textfont p-4 h-auto sm:text-3xl">
					{text}
				</figcaption>
			</figure>
		</NavLink>
	);
}
