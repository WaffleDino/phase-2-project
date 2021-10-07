import React, {useEffect} from "react";
import SpellDropdown from "./SpellDropdown";
import { NavLink } from "react-router-dom";




function SpellContainer ({setSpells, spells, selectedSpells, setSelectedSpells}) {
    
    useEffect (() => {
        fetch("https://www.dnd5eapi.co/api/spells")
        .then(response => response.json())
        .then(json => setSpells(json.results))
    }, [])
    
    
    
    function onChangeHandler(value){
        setSelectedSpells([...selectedSpells, value])
    }



    const options = spells.map(spell => {
        return {
            value: spell.name, label: spell.name
        }
    })

    const renderSelectedSpells = () => {
        if(selectedSpells.length > 0) {
            document.getElementById("spell-book").style.border="1px solid #282c34"
        return selectedSpells.map(selectedSpell => {
            return <p key={selectedSpell.value} >{selectedSpell.value}</p>
        })}
    }


    return (
        <div>
            <SpellDropdown options={options} onChange={onChangeHandler} label="Select your spells" />
            <div id="spell-book" className="spell-book">{renderSelectedSpells()}</div>
            <div>
                <NavLink to="equipment">
                    <button>Back</button>
                </NavLink>
                <NavLink to="completedsheet">
                    <button>Next</button>
                </NavLink>
            </div>
        </div>
    );
}







export default SpellContainer;