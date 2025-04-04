import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";
import ErrorPage from "./ErrorPage.jsx";
import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/Context.ts";

const Home = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    useEffect(() => {
        if (characters[heroId]) {
            changeHero(heroId);
        }
    }, [heroId]);

    if (!characters[heroId]) {
        return <ErrorPage />;
    }

    return (
        <main className="clearfix">
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main>
    );
};

export default Home;
