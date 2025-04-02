import Navigation from "./Navigation.jsx";
import {Route, Routes, useParams} from "react-router";
import {characters} from "../utils/constants.ts";



const Header = () => {
    const { id } = useParams<{ id: string }>(); // Получаем параметр из URL
    const character = characters[id as keyof typeof characters]; // Ищем персонажа в объекте

    return (
        <header className="rounded-top-4">
            <Navigation/>

            <Routes>
                <Route path="/characters/:id" id={character.name}/>
                <h1 className="text-center fs-1 py-4">{id}</h1>
            </Routes>

        </header>
    );
};

export default Header;