import {createContext} from "react";
import {SWContextValue} from "./type";
import {defaultHero} from "./constants.ts";

export const SWContext = createContext<SWContextValue>({
    hero: defaultHero,
    changeHero: (hero: string) => console.log(hero)
});