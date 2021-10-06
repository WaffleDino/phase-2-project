//here's the component where you put in strength, dex, const, intelligence, wisdom, charisma scores
//also! tied to saving throws--will need to do that math. can make that stuff a child component later if need be

//probably will need to make child component for the next section, armor class/initiative/speed, all that stuff. 

import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import Stats from "./Stats"
import { NavLink } from "react-router-dom";




function AbilityScores () {

const allStats = ['str','dex','con','int','wis','cha']
const [skills, setSkills] = useState([])




useEffect(() => {
fetch('https://www.dnd5eapi.co/api/skills')
.then(response => response.json())
.then(json => setSkills(json.results))
}, [])


const renderSkills = () => {
   if (!!skills) {
    console.log(skills)
    return skills.map(eachSkill => {
        return (
            <ul>
            <li>{eachSkill.name}: {statData.str}</li>
            </ul>
            )
    })}
}
const [statMod, setStatMod] = useState({
    str:'',
    dex:'',
    con:'',
    int:'',
    wis:'',
    cha:''
})






const renderSavingThrows = () => {
   if(!!statData.str) {
    if (statData.str == 1){
    return (<div>
        Strength: -5
    </div>)
    } else if (statData.str == 2 || statData.str == 3) {
    return (<div>
        Strength: -4
    </div>)
    }else if (statData.str == 4 || statData.str == 5) {
        return (<div>
            Strength: -3
        </div>)
    }else if (statData.str == 6 || statData.str == 7) {
        return (<div>
            Strength: -2
        </div>)
    }else if (statData.str == 8 || statData.str == 9) {
        return (<div>
            Strength: -1
        </div>)
    }else if (statData.str == 10 || statData.str == 11) {
        return (<div>
            Strength: 0
        </div>)
    }else if (statData.str == 12 || statData.str == 13) {
        return (<div>
            Strength: +1
        </div>)
    }else if (statData.str == 14 || statData.str == 15) {
        return (<div>
            Strength: +2
        </div>)
    }else if (statData.str == 16 || statData.str == 17) {
        return (<div>
            Strength: +3
        </div>)
    }else if (statData.str == 18 || statData.str == 19) {
        return (<div>
            Strength: +4
        </div>)
    }else {
        return (<div>
            Strength: +5
        </div>)
    }
} 
}

const [statData, setStatData] = useState({
    str:'',
    dex:'',
    con:'',
    int:'',
    wis:'',
    cha:''
})

const handleStatChange = (e) => {
    setStatData({
        ...statData,
        [e.target.name]: e.target.value
    })
}

   return <div>
        <h1>ability scores</h1>
        <Stats statData={statData} handleStatChange={handleStatChange}/>
        <form id="skillsForm">
            {renderSavingThrows()}
            {renderSkills()}
        </form>
      
        </div>

}

export default AbilityScores;