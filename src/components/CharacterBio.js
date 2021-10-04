//this is the top part of the character sheet, where you put in character name, class/level, race, background, alignment, player name, and experience points

//also going to take in the info for personality traits, ideals, bonds, and flaws here. 

//also features and traits, and other proficiencies and languages sections

import React, {useEffect, useState} from "react";

function CharacterBio () {
    //const [exampleData, setExampleData] = useState([]) 

    console.log('characterBio')
    
    useEffect (() => {
        fetch("https://www.dnd5eapi.co/api/classes")
        .then(response => response.json())
        .then(data => renderClasses(data))
    }, [])

    const renderClasses = (data) => {
        console.log(data)
        // return (data).map(eachClass => {
        //     return (<p>{eachClass.name}</p>)
        // })
    }

    return <div>
        {/* {!!classArray ? renderClasses() : null} */}
        {renderClasses()}
        </div>
}

export default CharacterBio;