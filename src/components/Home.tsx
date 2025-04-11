import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";
import ErrorPage from "./ErrorPage.jsx";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import UseEffect from "../utils/useEffect.ts";


const Home = () => {
    const {heroId = defaultHero} = useParams();


    if (!characters[heroId]) {
        return <ErrorPage />;
    }

    return (
        <>
            <UseEffect/>
        <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
        </>
    );
};

export default Home;
