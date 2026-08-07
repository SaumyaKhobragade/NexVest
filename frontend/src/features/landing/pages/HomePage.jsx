import Awards from "../components/home/Awards";
import Education from "../components/home/Education";
import Hero from "../components/home/Hero";
import Pricing from "../components/home/Pricing";
import Stats from "../components/home/Stats";

import OpenAccount from "../../../components/ui/OpenAccount";

function HomePage() {
	return (
		<>
			<Hero />
			<Awards />
			<Stats />
			<Pricing />
			<Education />
			<OpenAccount />
		</>
	);
}

export default HomePage;