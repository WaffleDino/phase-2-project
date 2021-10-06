//here's where we track all the stuff your character is holding, including weapons, money, magic stuff, etc

//my thought here is allowing user to click and choose several pieces of equipment, and to allow the user to type in their other items, and then save them all as a prop and pass it down to final component. 

import React, {useEffect, useState} from "react";

function Equipment () {
    const [equipment, setEquipment] = useState ([])
    const [chosenEquipment, setChosenEquipment] = useState([])
    const [currency, setCurrency] =useState({
        gold: 0,
        silver: 0,
        copper: 0,
    })

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
        console.log('target name', e.target.name)
        console.log('target value', e.target.value)
    }

    const handleCurrencyChange = (e) => {
        setCurrency({
            ...currency,
            [e.target.name]: e.target.value
        })
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

    const renderCurrencyForm = () => {
        return (
        <form onSubmit={submitCurrency}>
            <label> Gold:
                <input type="text" name="gold" onChange={handleCurrencyChange} value={currency.gold}/>
            </label>

                
            <label> Silver:
                <input type="text" name="silver" onChange={handleCurrencyChange} value={currency.silver}/>
            </label>

                
            <label> Copper:
                <input type="text" name="copper" onChange={handleCurrencyChange} value={currency.copper}/>
            </label>
            
            <input type="submit" />
        </form>
    )}

    const submitCurrency = (e) => {
        e.preventDefault();
        console.log(currency)
    }
    
    const submitOtherItems = (e) => {
        e.preventDefault();
        console.log(e.target.value)
    }

    const renderOtherForm = () => {
        return (
            <form onSubmit={submitOtherItems}>
                <label>Other items:</label>
                <textarea>
                    
                </textarea>



            </form>
        )
    }


    return (
        <>
            <p>equipment</p>

            {renderEquipment()}
            <br />
            {renderCurrencyForm()}
            <br />
            {/* {renderOtherForm()} */}
            <br />

            <p>You've chosen to carry:</p>
            <ul>
                Equipment:
                {/* list items for chosen equipment
                prob just make this into a funciton and call it here */}
            </ul>
            <ul>
                Currency:

            </ul>
            <ul>
                Other:

            </ul>

        </>
    ) 
}

export default Equipment;