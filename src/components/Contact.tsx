import '../Contact.css'
import {useEffect, useState} from "react";
import {base_url, characters, defaultHero, period_month} from "../utils/constants.ts";
import {Planet} from "../utils/type";
import ErrorPage from "./ErrorPage.tsx";
import UseEffect from "../utils/useEffect.ts";
import {useParams} from "react-router";

const Contact = () => {
    const [planets, setPlanets] = useState(['Loading...'])

    const {heroId = defaultHero} = useParams();


    if (!characters[heroId]){
        return <ErrorPage />;
    }


    async function fetchPlanets(url: string) {
        const response = await fetch(url);
        const data: Planet[] = await response.json();
        const planets = data.map(item => item.name);
        setPlanets(planets);
        localStorage.setItem('planets', JSON.stringify({
            payload: planets,
            timestamp: Date.now()
        }));
    }



    useEffect(() => {
        const planets = JSON.parse(localStorage.getItem('planets')!);
        if (planets && ((Date.now() - planets.timestamp) < period_month)) {
            setPlanets(planets.payload);
        } else {
            fetchPlanets(`${base_url}/v1/planets`);
        }
    }, [])

    return (
        <>
            <UseEffect/>
        <form className={'containerContact'} onSubmit={e => e.preventDefault()}>
            <label>First Name
                <input type="text" name="firstname" placeholder="Your name.."/>
            </label>

            <label>Last Name
                <input type="text" name="lastname" placeholder="Your last name.."/>
            </label>

            <label>Planet
                <select name="planet">
                    {planets.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
            </label>

            <label>Subject
                <textarea name="subject" placeholder="Write something.." style={{height: '200px'}}></textarea>
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    );
};

export default Contact;