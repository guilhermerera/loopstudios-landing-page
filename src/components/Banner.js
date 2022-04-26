function Banner(props) {
	return (
		<section className='banner'>
			<div className='banner-content'>
				<h1 className='banner-content-text'>{props.title}</h1>
			</div>
		</section>
	);
}

export default Banner;
