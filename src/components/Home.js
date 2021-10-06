//first page with a landing image, new character button

import React from "react";
import { NavLink } from "react-router-dom";


function Home () {
    return (
    <>
    <div>home</div>

        <NavLink to="characterBio">
            <button>Next</button>
        </NavLink>
    <button>Review saved character sheets</button>

    </>
    )

}

export default Home;