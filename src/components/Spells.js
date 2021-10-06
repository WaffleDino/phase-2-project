//spells in this component

//probably a drop down where you can click a spell and have more info from the spell show up. 

//remember, will need to do another fetch with each spell url to get to the actual info about the individual spell

import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";



function Spells () {
    useEffect (() => {
        fetch("https://www.dnd5eapi.co/api/spells")
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])



    return <div>Spells</div>
}

export default Spells;