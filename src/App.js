import "./App.min.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import logo from "./logo.svg";
import HeroSection from "./components/HeroSection";
import OurCreations from "./components/OurCreations";
import Footer from "./components/Footer";

function App() {
	return (
		<main>
			<NavBar logo={logo}></NavBar>
			<Header></Header>
			<HeroSection></HeroSection>
			<OurCreations></OurCreations>
			<Footer></Footer>
		</main>
	);
}

export default App;
