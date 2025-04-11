import {characters, defaultHero} from "./constants.ts";
import {useContext, useEffect} from "react";
import {SWContext} from "./Context.ts";
import {useParams} from "react-router";


const UseEffect = () => {
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext)
    useEffect(() => {
        if (characters[heroId]){
            changeHero(heroId);
        }
    }, [heroId]);
    return null;
};

export default UseEffect;