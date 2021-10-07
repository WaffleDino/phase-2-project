//first page with a landing image, new character button

import React from "react";
import { NavLink } from "react-router-dom";


function Home () {

    const fetchSavedSheets = () => {
        fetch('http://localhost:4000/characterbio')
        .then(response => response.json())
        .then(data => {
            return (
            data.map(each => {
                return (
                    <div>
                    {console.log(each)}
                    <p>{each.name}</p>
                    {/* probably will need to make this a separate render function sadly */}
                    </div>
                )
            })
        )}
        )
    }
                
  

    return (
    <>
    <div>home</div>

        <NavLink to="characterBio">
            <button>Create new character sheet</button>
        </NavLink>
    <button onClick={fetchSavedSheets}>Review saved character sheets</button>

    </>
    )

}

export default Home;