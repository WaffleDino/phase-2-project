//also going to take in the info for personality traits, ideals, bonds, and flaws here. 

//also features and traits, and other proficiencies and languages sections

import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";


function CharacterBio ({setCharacterInfo}) {
    const [classes, setClasses] = useState([]) 
    const [races, setRaces] = useState([])
    const [chosenClass, setChosenClass] = useState([])
    const [characterFormData, setCharacterFormData] = useState({
        name: '',
        class: '',
        level: '',
        race: '',
        alignment: '',
        background: '',
        experience: 0,
        image: '',
        player: '',
    })
    
    const handleChange = (e) => {
        setCharacterFormData({
            ...characterFormData,
            [e.target.name]: e.target.value
        })
    }

    const submitCharBio = (e) => {
        e.preventDefault();
        console.log(characterFormData);
        setCharacterInfo(characterFormData)
        // ****** looks like we'll want to do the above for all components that are trying to pass info down to the completed sheet! make a state for the saved info inside of app, then in the component set that state at the very end when you're submitting. then in app, pass the prop set function down to the component and pass the prop state down to the completed sheet!
        
        // fetch('http://localhost:4000/characterbio', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(characterFormData)
        // })
        // .then(response =>  response.json())
        // .then(data => console.log(data))
    }

    //fetch to get list of classes from api, there are 12
    useEffect (() => {
        fetch("https://www.dnd5eapi.co/api/classes")
        .then(response => response.json())
        .then(data => {
            console.log('data from inside class fetch', data.results)
            setClasses(data.results)
        })
    }, [])

    //fetch to get list of races from api, there are 9
    useEffect (() => {
        fetch("https://www.dnd5eapi.co/api/races")
        .then(response => response.json())
        .then(data => {
            console.log('data from inside race fetch', data.results)
            setRaces(data.results)
        })
    }, [])

    const renderRaces = () => {
        if (!!races) {
            console.log(races)
            return (
                <>
                <label>Character Race: </label>
                <select name="race" onChange={handleChange}>
                    <option selected value ="Click to see race options">Click to see race options...</option>

                    {races.map(each => {
                        return (
                            <option value={each.name}>{each.name}</option>
                        )
                    })}

                </select>
                </>
            )
        }
    }


    const renderClasses = () => {
        if (!!classes) {
        return (
            <>
            <label>Character Class: </label>
            <select name="class" onChange={handleChange}>
                <option selected value ="Click to see class options">Click to see class options...</option>

                {classes.map(each => {
                return (
                    <option value={each.name}>{each.name}</option>
                )
                })}

            </select>
            </>
        )}}



    return (
        <div>
            <h3>Character Bio</h3>

            <FormStyling onSubmit={submitCharBio}>
                <label> Character Name: 
                    <input type="text" name="name" onChange={handleChange} value={characterFormData.name} /> 
                </label>

                <label> Character Level: 
                    <input type="text" name="level" onChange={handleChange} value={characterFormData.level} /> 
                </label>

                {renderClasses()}
                {renderRaces()}   

                <label>Character Alignment: </label>
                <select name="alignment" onChange={handleChange}>
                    <option selected value ="Click to see alignment options">Click to see alignment options...</option>
                    <option value="chaotic good">Chaotic good</option>
                    <option value="neutral good">Neutral good</option>
                    <option value="lawful good">Lawful good</option>
                    <option value="chaotic neutral">Chaotic good</option>
                    <option value="true neutral">True neutral</option>
                    <option value="lawful neutral">Lawful neutral</option>
                    <option value="chaotic evil">Chaotic evil</option>
                    <option value="neutral evil">Neutral evil</option>
                    <option value="lawful evil">Lawful evil</option>
                </select>   

                <label> Character Background: 
                    <input type="text" name="background" onChange={handleChange} value={characterFormData.background} />
                </label>

                <label> Character Experience Points: 
                    <input type="text" name="experience" onChange={handleChange} value={characterFormData.experience} /> 
                </label>

                <label> Character Image:
                    <input type="text" name="image" onChange={handleChange} value={characterFormData.image} />
                </label>

                <label> Player Name: 
                    <input type="text" name="player" onChange={handleChange} value={characterFormData.player} /> 
                </label>

                    <input type="submit" />
            </FormStyling>

            {/* to home, like a back button  */}
            <NavLink to="">
                <button>Back</button>
            </NavLink>
            {/* to ability scores, like next button */}
            <NavLink to="abilityScores">
                <button>Next</button>
            </NavLink>
        </div>
    )
}

export default CharacterBio;

const FormStyling = styled.form `
display: flex;
flex-flow: column wrap;
padding: 25px 25px;
justify-content: space-between;
`

const CharacterCardStyling = styled.div `
    padding: 25px;
    border: 1px solid black;
    width: 20%;
    text-align: center;
`
    
const CharacterContainerStyles = styled.div `
    display: flex;
    flex-flow: row wrap;
    padding: 25px;
`