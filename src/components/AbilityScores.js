//here's the component where you put in strength, dex, const, intelligence, wisdom, charisma scores
//also! tied to saving throws--will need to do that math. can make that stuff a child component later if need be

//probably will need to make child component for the next section, armor class/initiative/speed, all that stuff. 

import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Stats from "./Stats"
import Modifiers from "./Modifiers"
import { NavLink } from "react-router-dom";




function AbilityScores ({statData, setStatData}) {

const allStats = ['str','dex','con','int','wis','cha']
const [skills, setSkills] = useState([])




useEffect(() => {
fetch('https://www.dnd5eapi.co/api/skills')
.then(response => response.json())
.then(json => setSkills(json.results))
}, [])


// const [statData, setStatData] = useState({
//     str:'',
//     strMod:'',
//     dex:'',
//     dexMod:'',
//     con:'',
//     conMod:'',
//     int:'',
//     intMod:'',
//     wis:'',
//     widMod:'',
//     cha:'',
//     ChaMod:''
// })

const handleStatChange = (e) => {
    setStatData({
        ...statData,
        [e.target.name]: e.target.value
    })
}

   

   return <div>
        <h1>ability scores</h1>
        
        <Stats statData={statData} handleStatChange={handleStatChange}/>
        {/* <Modifiers   statData={statData} statMod={statMod} setStatMod={setStatMod} handleModChange={handleModChange} /> */}
        <form id="skillsForm">
            {/* {renderSkills()} */}
        </form>

        <div>
            <NavLink to="characterbio">
                <button>Back</button>
            </NavLink>
            <NavLink to="equipment">
                <button>Next</button>
            </NavLink>
        </div>

        </div>

}

export default AbilityScores;