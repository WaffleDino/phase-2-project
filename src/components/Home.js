//first page with a landing image, new character button

import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";



function Home () {

    const [savedSheets, setSavedSheets] = useState([]);

    useEffect (() => {
        fetch('http://localhost:4000/characterbio')
        .then(response => response.json())
        .then(data => {
            console.log('inside home', data)
            setSavedSheets(data)
        }) 
    }, []) //should make this go every time there's a toggle state change
    
    const renderSavedSheets = () => {
        //triggered on button click, should take the savedSheets state and render maybe the character name
        console.log(savedSheets)
    }


    return (
    <>
    <div>home</div>



    <div className="row">

    <div className="col-xs-12">
        <img className="img-fluid"src="https://via.placeholder.com/1000"/>
    </div>

    <div className="col-sm-12 col-md-6">
        <p>Are you looking for a lightweight, minimalist character sheet? Welcome to your new favorite app. Just fill in your character's info in the following pages and enjoy the result. </p>
    </div>
    </div>
        <NavLink to="characterBio">
            <button>Create new character sheet</button>
        </NavLink>
    <button onClick={renderSavedSheets}>Review saved character sheets</button>

    </>
    )

}

export default Home;