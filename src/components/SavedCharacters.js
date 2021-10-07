import React from "react";
import { NavLink } from "react-router-dom";

function SavedCharacters() {
    return (
        <div>
            saved characters

            <NavLink to="">
                <button>Back Home</button>
            </NavLink>
        </div>
    )
}

export default SavedCharacters;