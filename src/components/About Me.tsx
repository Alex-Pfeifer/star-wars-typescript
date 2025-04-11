
import {useContext, useEffect, useState} from "react";
import {HeroInfo} from "../utils/type";
import {useParams} from "react-router";
import {characters, defaultHero, period_month} from "../utils/constants.ts";
import {SWContext} from "../utils/Context.ts";
import ErrorPage from "./ErrorPage.tsx";


const AboutMe = () => {
    const [hero, setHero] = useState<HeroInfo>();


    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext)

    console.log(heroId);

    useEffect(() => {
        if (characters[heroId]){
            changeHero(heroId);
        }
        
        const hero = JSON.parse(localStorage.getItem(heroId)!);
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
            setHero(hero.payload);
        } else {
            fetch(characters[heroId].url)
                .then(response => response.json())
                .then(data => {
                    const info = {
                        name: data.name,
                        gender: data.gender,
                        birth_year: data.birth_year,
                        height: data.height,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color
                    }
                    setHero(info);
                    localStorage.setItem(heroId, JSON.stringify({
                        payload: info,
                        timestamp: Date.now()
                    }));
                })
        }

    }, [heroId])

    if (!characters[heroId]) {
        return <ErrorPage />;
    }
    

    return (
        <>
            {(!!hero) &&
                <div className='fs-2 lh-lg text-justify ms-5'>
                    {Object.keys(hero).map((key) => (
                        <p key={key}>
                            <span className='display-3'>{key.replace('_', ' ')}: </span> {hero[key as keyof HeroInfo]}
                        </p>
                    ))}
                </div>
            }
        </>
    );
};

export default AboutMe;