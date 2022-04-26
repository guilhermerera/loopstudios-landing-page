import hamburger from "../assets/icons/icon-hamburger.svg";

function NavBar(props) {
	return (
		<nav className='nav-bar'>
			<div className='nav-bar-logo'>
				<img src={props.logo} alt=''></img>
			</div>
			<div className='nav-bar-menu'>
				<img src={hamburger} alt=''></img>
			</div>
		</nav>
	);
}

export default NavBar;
