import Home from "./Home.jsx";
import AboutMe from "./About Me.tsx";
import StarWars from "./StarWars.jsx";
import Contact from "./Contact.jsx";
import {navItems} from "../utils/constants.js";

import {Route, Routes} from "react-router";
import ErrorPage from "./ErrorPage.tsx";

const Main = () => {

    return (
        <Routes>
            {['/', navItems[0].path, `${navItems[0].path}/:heroId`].map(path => <Route key={path} path={path} element={<Home/>}/>)}
            {[navItems[1].path, `${navItems[1].path}/:heroId`].map(path => <Route key={path} path={path} element={<AboutMe />}/>)}
            {[navItems[2].path, `${navItems[2].path}/:heroId`].map(path => <Route key={path} path={path} element={<StarWars />}/>)}
            {[navItems[3].path, `${navItems[3].path}/:heroId`].map(path => <Route key={path} path={path} element={<Contact />}/>)}
            <Route path={'*'} element={<ErrorPage />}/>
        </Routes>
    )

}

export default Main;