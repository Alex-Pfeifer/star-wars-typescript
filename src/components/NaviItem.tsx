import {NavLink} from "react-router";
import {Item} from "../utils/type";
import {SWContext} from "../utils/Context.ts";
import {useContext} from "react";


interface Props {
    item: Item
}

const NavItem = ({item}: Props) => {
    const {hero} = useContext(SWContext);

    return (
        <NavLink
            to={`${item.path}/${hero}`}
            className="nav-item btn btn-danger mx-1"
        >{item.title}</NavLink>
    );
};

export default NavItem;