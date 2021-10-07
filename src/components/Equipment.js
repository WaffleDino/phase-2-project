import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";


function Equipment ({setFinishedEquipment}) {
    const [equipment, setEquipment] = useState ([])

    const [equipmentFormData, setEquipmentFormData] = useState({
        chosenEquipment: [],
        gold: 0,
        silver: 0,
        copper: 0,
        otherItems: "",
    })

    //fetch to get list of equipment from api and set into equipment state
    useEffect (() => {
        fetch("https://www.dnd5eapi.co/api/equipment")
        .then(response => response.json())
        .then(data => {
            //console.log('data from inside equipment fetch', data.results)
            setEquipment(data.results)
        })
    }, [])

    const handleChange = (e) => {
        console.log('target name', e.target.name)
        console.log('target value', e.target.value)

        if (e.target.name === "chosenEquipment") {
            console.log('inside if statement', e.target.name, e.target.value)
            setEquipmentFormData({
                ...equipmentFormData,
                [e.target.name]:  [...equipmentFormData.chosenEquipment, e.target.value] //idk if this will actually work
            })
            console.log('from if statement', equipmentFormData);
        } else {
            console.log('inside else statement', e.target.name, e.target.value)
            setEquipmentFormData({
                ...equipmentFormData, 
                [e.target.name]: e.target.value
            })
            console.log('from else statement', equipmentFormData);
        }
    }


    const renderEquipment = () => {
        if (!!equipment) {
            return (
                <>
                <label>Choose your equipment: </label>
                <select name="chosenEquipment" onChange={handleChange}>
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

    const renderOtherInput = () => {
        return (
            <>
                <label> Gold:
                    <input type="text" name="gold" onChange={handleChange} value={equipmentFormData.gold}/>
                </label>

                <label> Silver:
                    <input type="text" name="silver" onChange={handleChange} value={equipmentFormData.silver}/>
                </label>

                <label> Copper:
                    <input type="text" name="copper" onChange={handleChange} value={equipmentFormData.copper}/>
                </label>

                <label>What else are you carrying?</label>
                <textarea name="otherItems" onChange={handleChange} value={equipmentFormData.otherItems} />
                
            </>
        )
    }

    const submitEquipment = (e) => {
        e.preventDefault();
        console.log(equipmentFormData);
        setFinishedEquipment(equipmentFormData)
    }

    const renderChosenEquipment = () => {
        return (
            equipmentFormData.chosenEquipment.map(each => <li>{each}</li>)
        )
    }

    return (
        <>
            <p>equipment</p>
            <form onSubmit={submitEquipment}>
                {renderEquipment()}
                <br/><br/>
                {renderOtherInput()}
                <input type="submit" />
            </form>

            <p>You've chosen to carry:</p>
            <ul>
                Equipment:
                    {renderChosenEquipment()}
            </ul>
            <ul>
                Currency:
                <li>Gold : {equipmentFormData.gold}</li>
                <li>Silver : {equipmentFormData.silver}</li>
                <li>Copper : {equipmentFormData.copper}</li>
            </ul>
            <ul>
                Other:
                <div>{equipmentFormData.otherItems}</div>

            </ul>

            <button>Back</button>
            <button>Next</button>

        </>
    ) 
}

export default Equipment;