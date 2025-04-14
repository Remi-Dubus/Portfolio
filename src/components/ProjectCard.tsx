import { NavLink } from "react-router-dom";

export default function ProjectsCard({
	alt,
	text,
	url,
	picture,
	video,
}: {
	alt: string;
	text: string;
	url: string;
	picture: string | null;
	video: string | null;
}) {
	// JSX
	return (
		<NavLink to={url}>
			<figure className="h-1/3 rounded mx-4 flex flex-col">
				{picture && (
					<img
						src={picture}
						alt={alt}
						className="h-48 lg:h-64 rounded-lg border-4 border-lightcolor hover:border-acccolor"
					/>
				)}
				{video && (
					<video
						className="h-64 rounded-lg border-4 border-lightcolor hover:border-acccolor"
						autoPlay
						muted
						loop
					>
						<source src={video} type="video/mp4" />
					</video>
				)}

				<figcaption className=" text-lightcolor font-textfont p-4 h-auto sm:text-3xl">
					{text}
				</figcaption>
			</figure>
		</NavLink>
	);
}
