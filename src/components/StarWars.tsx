import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import {useParams} from "react-router";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/Context.ts";
import ErrorPage from "./ErrorPage.tsx";


const StarWars = () => {

    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext)
    useEffect(() => {
        if (characters[heroId]){
            changeHero(heroId);
        }

    }, [heroId]);

    if (!characters[heroId]){
        return <ErrorPage />
    }

    return (
        <div className="farGalaxy">
            {starWarsInfo}
        </div>
    );
};

export default StarWars;