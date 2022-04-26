function HeroSection() {
	return (
		<section id='HeroSection' className='hero-section'>
			<picture>
				<img
					className='hero-section-image'
					src='./assets/images/mobile/image-interactive.jpg'
					alt='VR Interactive'></img>
			</picture>
			<article className='hero-section-text'>
				<h2 className='hero-section-text-header'>
					THE LEADER IN INTERACTIVE VR
				</h2>
				<p className='hero-section-text-paragraph'>
					Founded in 2011, Loopstudios has been producing world-class virtual
					reality projects for some of the best companies around the globe. Our
					award-winning creations have transformed businesses through digital
					experiences that bid to their brand.
				</p>
			</article>
		</section>
	);
}

export default HeroSection;
