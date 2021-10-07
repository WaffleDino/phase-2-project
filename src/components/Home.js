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
        return (

            savedSheets.map(each => console.log(each))
        )
    }


    return (
    <>
    <div><h1>HOME</h1></div>



    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://www.gameoutonline.com/wp-content/uploads/2020/12/dnd-bard-elf.png" class="d-block w-100" alt="bard image"/>
            </div>
            <div class="carousel-item">
                <img src="https://www.playandground.gg/wp-content/uploads/2020/09/Daco_5630804.png" class="d-block w-100" alt="warlock image"/>
            </div>
            <div class="carousel-item">
                <img src="https://i.pinimg.com/originals/8e/c0/ce/8ec0cee6c2f4ab19b0b7679ecde05a13.png" class="d-block w-100" alt="druid image"/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>





    <div className="row">

    <div className="col-xs-12">
    </div>

    <div className="col-sm-12 col-md-6">
        <p>Are you looking for a lightweight, minimalist character sheet? Welcome to your new favorite app. Just fill in your character's info in the following pages and enjoy the result. </p>
    </div>
    </div>
        <NavLink to="characterBio">
            <button>Create new character sheet</button>
        </NavLink>
        <NavLink  to="savedcharacters">
            <button onClick={renderSavedSheets}>Review saved character sheets</button>
        </NavLink>

    </>
    )

}

export default Home;

