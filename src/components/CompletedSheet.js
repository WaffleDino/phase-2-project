import React from "react";
import { NavLink } from "react-router-dom";


function CompletedSheet ({characterInfo, finishedEquipment}) {
    //will have all the completed info from previous components passed through to here as props

    //will display all those props on the page here

    const saveCharacterSheet = () => {
        //here's where we can POST the finalized character sheet to the db!
    }

return (
    <>
    <div>Completed Sheet </div>
    {console.log('inside completed sheet', characterInfo)}
    {console.log('inside completed sheet', finishedEquipment)}

    <p>Name: {characterInfo.name}</p>
    <p>Class: {characterInfo.class}</p>

    <p>Gold: {finishedEquipment.gold}</p>
    <p>Other stuff: {finishedEquipment.otherItems}</p>

    <button onClick={saveCharacterSheet}>Save Character Sheet</button>
    </>
)

}

export default CompletedSheet;