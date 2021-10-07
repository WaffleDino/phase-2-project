import React, { useState } from "react";

function Stats({statData, setStatData, handleStatChange}) {

const handleStatSubmit = (event) => {
    event.preventDefault();
    // fetch("http://localhost:3000/abilityScores", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(statData)
    //   })
    //   .then(response => response.json())
     }
  

    return (
<div>

        <form  onSubmit={handleStatSubmit}>
        <label> <a href="#" data-toggle="tooltip" title="Strength measures bodily power, athletic training, and the extent to which you can exert raw physical force. Associated Character Skill: Athletics"> Strength (STR): </a>
            <input type="number" min="1" max="21"name="str" placeholder="1" onChange={handleStatChange} value={statData.str}/>
        </label>
        <label> <a href="#" data-toggle="tooltip" title="Dexterity measures agility, reflexes, and balance. Associated Character Skills: Acrobatics, Sleight of Hand, and Stealth">Dexterity (DEX): </a>
            <input type="number" min="1" max="21"name="dex" placeholder="1" onChange={handleStatChange} value={statData.dex} />
        </label>
        <label> <a href="#" data-toggle="tooltip" title="Constitution measures health, stamina, and vital force. Associated Character Skills: Acrobatics, Sleight of Hand, and Stealth">Constitution (CON): </a>
            <input type="number" min="1" max="21"name="con" placeholder="1" onChange={handleStatChange} value={statData.con} />
        </label>
        <label> <a href="#" data-toggle="tooltip" title="Intelligence measures mental acuity, accuracy of recall, and the ability to reason. Associated Character Skills: Arcana, History, Investigation, Nature, and Religion">Intelligence (INT): </a>
            <input type="number" min="1" max="21"name="int" placeholder="1" onChange={handleStatChange} value={statData.int} />
        </label>
        <label> <a href="#" data-toggle="tooltip" title="Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition. Associated Character Skills: Animal Handling, Insight, Medicin, Perception, and Survival">Wisdom (WIS): </a>
            <input type="number" min="1" max="21"name="wis" placeholder="1" onChange={handleStatChange} value={statData.wis} />
        </label>
        <label> <a href="#" data-toggle="tooltip" title="Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality. Associated Character Skills: Deception, Intimidation, Performance, and Persuasion"> Charisma (CHA): </a>
            <input type="number" min="1" max="21"name="cha" placeholder="1" onChange={handleStatChange} value={statData.cha} />
        </label>
       <label> 
           <br></br>
           <br></br>
           <br></br>
       </label>
        <label>  STR Modifier:
            <input type="number" min="1" max="21"name="strMod" placeholder="1" onChange={handleStatChange} value={statData.strMod}/>
        </label>
        <label> DEX Modifier:
            <input type="number" min="1" max="21"name="dexMod" placeholder="1" onChange={handleStatChange} value={statData.dexMod} />
        </label>
        <label> CON Modifier:
            <input type="number" min="1" max="21"name="conMod" placeholder="1" onChange={handleStatChange} value={statData.conMod} />
        </label>
        <label> INT Modifier:
            <input type="number" min="1" max="21"name="intMod" placeholder="1" onChange={handleStatChange} value={statData.intMod} />
        </label>
        <label> WIS Modifier:
            <input type="number" min="1" max="21"name="wisMod" placeholder="1" onChange={handleStatChange} value={statData.wisMod} />
        </label>
        <label> CHA Modifier:
            <input type="number" min="1" max="21"name="chaMod" placeholder="1" onChange={handleStatChange} value={statData.chaMod} />
        </label>

        <input type="submit" value="Confirm Stats"/>
    </form>





</div>       
    )
}

export default Stats;