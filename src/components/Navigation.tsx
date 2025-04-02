import NavItem from "./NaviItem.tsx";
import {navItems} from "../utils/constants.js";

const Navigation = () => {
    return (
        <nav className="fixed-top mt-2 ms-5">
            <ul className="nav">
                {navItems.map(item => <NavItem item={item} key={item.path}/>)}
            </ul>
        </nav>
    );
};

export default Navigation;