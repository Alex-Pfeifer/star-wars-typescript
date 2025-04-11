import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import {useParams} from "react-router";
import ErrorPage from "./ErrorPage.tsx";
import UseEffect from "../utils/useEffect.ts";


const StarWars = () => {
    const {heroId = defaultHero} = useParams();

    if (!characters[heroId]) {
        return <ErrorPage/>
    }

    return (
        <>
            <UseEffect/>
            <div className="farGalaxy">
                {starWarsInfo}
            </div>
        </>
    );
};

export default StarWars;