import React, {useState} from "react";
import { NavLink } from "react-router-dom";



function CompletedSheet ({characterInfo, finishedEquipment, selectedSpells, statData}) {
    //will have all the completed info from previous components passed through to here as props

    //will display all those props on the page here
    const [completedCharacterSheet, setCompletedCharacterSheet] = useState({
        name: '',
        class: '',
        level: '',
        race: '',
        alignment: '',
        background: '',
        experience: 0,
        image: '',
        player: '',
        equipment: [],
        gold: 0,
        silver: 0,
        copper: 0,
        other: '',
        str: '',
        dex: '',
        con: '',
        int: '',
        wis: '',
        cha: '',
        strmod: '',
        dexmod: '',
        conmod: '',
        intmod: '',
        wismod: '',
        chamod: '',
        spells: [],
    })

    const saveCharacterSheet = () => {
        const characterSheet = {
            name: characterInfo.name,
            class: characterInfo.class,
            level: characterInfo.level,
            race: characterInfo.race,
            alignment: characterInfo.alignment,
            background: characterInfo.background,
            experience: characterInfo.experience,
            image: characterInfo.image,
            player: characterInfo.player,
            equipment: finishedEquipment.chosenEquipment,
            gold: finishedEquipment.gold,
            silver: finishedEquipment.silver,
            copper: finishedEquipment.copper,
            other: finishedEquipment.otherItems,
            str: statData.str,
            dex: statData.dex,
            con: statData.con,
            int: statData.int,
            wis: statData.wis,
            cha: statData.cha,
            strmod: statData.strMod,
            dexmod: statData.dexMod,
            conmod: statData.conMod,
            intmod: statData.intMod,
            wismod: statData.wisMod,
            chamod: statData.chaMod,
            spells: selectedSpells, 
        }
        
        
        
        setCompletedCharacterSheet(characterSheet)
        fetchPost(characterSheet)
    }
    
    const fetchPost = (characterSheet) => {
    fetch('http://localhost:4000/finishedCharacterSheet', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(characterSheet)
})
.then(response =>  response.json())
.then(data => console.log(data))
}







return (
    <>
    <div>Completed Sheet </div>

    



    <div className="characterbiodiv">
        <h1>Character Bio</h1>
        <ul>
            <li>Player Name: {characterInfo.player}</li>
            <li>Character Name: {characterInfo.name}</li>
            <li>Class: {characterInfo.class}</li>
            <li>Race: {characterInfo.race}</li>
            <li>Level: {characterInfo.level}</li>
            <li>Experience Points: {characterInfo.experience}</li>
            <li>Alignment: {characterInfo.alignment}</li>
            <li>Background: {characterInfo.background}</li>
            <img src={characterInfo.image} alt="character image" />
        </ul>

        
    </div>


    <div className="equipmentdiv">
        <h1>Equipment</h1>
        <ul>
        
            {finishedEquipment.chosenEquipment.map(each => <li>{(each)}</li>)}  
        




            <li>Money: {finishedEquipment.gold} gold, {finishedEquipment.silver} silver, {finishedEquipment.copper} copper </li>
            <li>Other Items: {finishedEquipment.otherItems}</li>
        </ul>
    </div>
    
    <div className="statdiv">
        <h1>Ability Scores</h1>
        <ul>
            <li>Strength: {statData.str} | Saving Throw: {statData.strMod}</li> 
            <li>Dexterity: {statData.dex} | Saving Throw: {statData.dexMod}</li>
            <li>Constitution: {statData.con} | Saving Throw: {statData.conMod}</li>
            <li>Intelligence: {statData.int} | Saving Throw: {statData.intMod}</li>
            <li>Wisdom: {statData.wis} | Saving Throw: {statData.wisMod}</li>
            <li>Charisma: {statData.cha} | Saving Throw: {statData.chaMod}</li>
        </ul>
    </div>
    
   

    <div className="skillsdiv">

    </div>

    <div className="spelldiv">
        <h1>Selected Spells</h1>
        <ul>

    {selectedSpells.map(each => <li>{(each.value)}</li>)}
        </ul>
    </div>
    <NavLink to="spells">          
        <button>Back</button>
    </NavLink>
    <NavLink to="">          
    <button onClick={saveCharacterSheet}>Save Character Sheet</button>
    </NavLink>
    </>
)

}

export default CompletedSheet;