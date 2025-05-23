import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";
import {SWContext} from "./utils/Context.ts";


function App() {

    const [hero, setHero] = useState(defaultHero);

    return (
        <div className={'container-fluid'}>
            <SWContext value={{
                hero, changeHero: setHero,
            }}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext>
        </div>
    )
}

export default App