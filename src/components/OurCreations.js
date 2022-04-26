function OurCreations() {
	const cards = [
		{
			id: "01",
			title: "Deep Earth",
			image: "image-deep-earth.jpg",
			class_Name: "deep-earth"
		},
		{
			id: "02",
			title: "Night Arcade",
			image: "image-night-arcade.jpg",
			class_Name: "night-arcade"
		},
		{
			id: "03",
			title: "Soccer Team VR",
			image: "image-soccer-team.jpg",
			class_Name: "soccer-team"
		},
		{
			id: "04",
			title: "The Grid",
			image: "image-grid.jpg",
			class_Name: "the-grid"
		},
		{
			id: "05",
			title: "From Up Above VR",
			image: "image-from-above.jpg",
			class_Name: "from-above"
		},
		{
			id: "06",
			title: "Pocket Borealis",
			image: "image-pocket-borealis.jpg",
			class_Name: "pocket-borealis"
		},
		{
			id: "07",
			title: "The Curiosity",
			image: "image-curiosity.jpg",
			class_Name: "the-curiosity"
		},
		{
			id: "08",
			title: "Make It Fisheye",
			image: "image-fisheye.jpg",
			class_Name: "make-fisheye"
		}
	];

	cards.forEach((item) => {
		item.class_Name = `our-creations-items-card ${item.class_Name}`;
	});

	return (
		<section id='OurCreations' className='our-creations'>
			<h2 className='our-creations-header'>Our Creations</h2>
			<div className='our-creations-items'>
				{cards.map((item) => {
					return (
						<article className={item.class_Name}>
							<h3 className='our-creations-items-card-title'>{item.title}</h3>
						</article>
					);
				})}
			</div>
			<div className='our-creations-footer'>
				<button type='button' className='our-creations-footer-btn'>
					See All
				</button>
			</div>
		</section>
	);
}

export default OurCreations;
