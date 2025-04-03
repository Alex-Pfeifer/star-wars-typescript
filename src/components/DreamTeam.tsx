import Friend from "./Friend.jsx";
import {friends} from "../utils/constants.js";
import {useContext} from "react";
import {SWContext} from "../utils/Context.ts";


const DreamTeam = () => {
    const {hero} = useContext(SWContext);

    return (
        <section className="float-end w-50 row border rounded-bottom-4 ms-2 me-0">
            <h2 className="col-sm-12 text-center">Dream Team</h2>
            {friends.filter(friend => friend !== hero ).map((friend, i) => <Friend friend={friend} pos={i + 1} key={i} />)}
        </section>
    );
};

export default DreamTeam;