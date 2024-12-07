export default function ProjectsCard({ image }: { image: string }) {
	return (
		<section className="h-full rounded">
			<img
				src={image}
				alt=""
				className="h-60 rounded-lg border-2 border-lightcolor"
			/>
			<p> </p>
		</section>
	);
}
