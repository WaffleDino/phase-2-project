//here's where we track all the stuff your character is holding, including weapons, money, magic stuff, etc

//my thought here is allowing user to click and choose several pieces of equipment, and to allow the user to type in their other items, and then save them all as a prop and pass it down to final component. 

import React, {useEffect, useState} from "react";

function Equipment () {
    const [equipment, setEquipment] = useState ([])

    //fetch to get list of equipment from api
    useEffect (() => {
        fetch("https://www.dnd5eapi.co/api/equipment")
        .then(response => response.json())
        .then(data => {
            console.log('data from inside equipment fetch', data.results)
            setEquipment(data.results)
        })
    }, [])

    const handleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        //going to put these inside of an array and save the array with the key of equipment

    }
    
    const renderEquipment = () => {
        if (!!equipment) {
            return (
                <>
                <label>Choose your equipment: </label>
                <select name="equipment" onChange={handleChange}>
                    <option value="Choose your equipment...">Choose your equipment...</option>
            
                
                    {equipment.map(each => {
                        return (
                            <option value={each.name}>{each.name}</option>
                        )
                    })}
                    
                
                </select>
                </>
            )
        }
    }

//then also going to add a form where user can type in their gold, silver, and other money

//then also going to add another form where user can type in their other items! 

    return (
        <>
            <div>equipment</div>
            {renderEquipment()}
        </>
    ) 
}

export default Equipment;