import {createContext} from "react";
import {SWContexValue} from "./type";
import {navItems} from "./constants.ts";

export const StarWarsContext = createContext<SWContexValue>({
    page: navItems[0],
    changePage: (page: string) => console.log(page)
});