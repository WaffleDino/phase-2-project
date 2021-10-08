import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";

function SavedCharacters() {
    const [savedChar, setSavedChar] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:4000/finishedCharacterSheet')
        .then(response => response.json())
        .then(json => setSavedChar(json))
    }, [])
   
    const renderCards = () => {
        return  (
            savedChar.map(each => {
                return (
                    <div className="col-sm-3" key={each.id}>
                        <div className="card">
                        <img src={each.image} className="card-img-top" alt="Placekitten" />
                        <div className="card-body">
                            <h5 className="card-title">{each.name}</h5>
                            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#character-sheet-1">Show Details</a>
                        </div>
                        </div>
                        <div class="modal fade" id="character-sheet-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Orc Man</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <ul className="list-unstyled">
                                    <li><h3>Character Bio</h3></li>
                                    <ul>
                                    <li>Player Name: {each.player}</li>
                                    <li>Character Name: {each.name}</li>
                                    <li>Class: {each.class}</li>
                                    <li>Race: {each.race}</li>
                                    <li>Level: {each.level}</li>
                                    <li>Experience Points: {each.experience}</li>
                                    <li>Alignment: {each.alignment}</li>
                                    <li>Background: {each.background}</li>
                                    </ul>
                                    <li><h3>Equipment</h3></li>
                                    <ul>
                                    {each.equipment.map(each => <li>{(each)}</li>)}
                                    <li>Money: {each.gold} gold, {each.silver} silver, {each.copper} copper </li>
                                    <li>Other Items: {each.otherItems}</li>
                                    </ul>
                                    <li><h3>Stats</h3></li>
                                    <ul>
                                    <li>Strength: {each.str} | Saving Throw: {each.strmod}</li> 
                                    <li>Dexterity: {each.dex} | Saving Throw: {each.dexmod}</li>
                                    <li>Constitution: {each.con} | Saving Throw: {each.conmod}</li>
                                    <li>Intelligence: {each.int} | Saving Throw: {each.intmod}</li>
                                    <li>Wisdom: {each.wis} | Saving Throw: {each.wismod}</li>
                                    <li>Charisma: {each.cha} | Saving Throw: {each.chamod}</li>
                                    </ul>
                                    <li><h3>Abilities</h3></li>
                                    <ul>
                                    <li>Acrobatics: {each.dexmod}</li>
                                    <li>Animal Handling: {each.wismod}</li>
                                    <li>Arcana: {each.intmod}</li>
                                    <li>Athletics: {each.strmod}</li>
                                    <li>Deception:{each.chamod} </li>
                                    <li>History: {each.intmod}</li>
                                    <li>Insight: {each.wismod}</li>
                                    <li>Intimidation: {each.chamod}</li>
                                    <li>Investigation: {each.intmod}</li>
                                    <li>Medicine: {each.wismod}</li>
                                    <li>Nature: {each.intmod}</li>
                                    <li>Perception: {each.wismod}</li>
                                    <li>Performance: {each.chamod}</li>
                                    <li>Persuasion: {each.chamod}</li>
                                    <li>Religion: {each.intmod}</li>
                                    <li>Slight of Hand: {each.dexmod}</li>
                                    <li>Stealth: {each.dexmod}</li>
                                    <li>Survival: {each.wismod}</li>
                                     </ul>   
                                    <li><h3>Spells</h3></li>
                                    <ul>
                                    {each.spells.map(each => <li>{(each.value)}</li>)}
                                    </ul>
                                </ul>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                )

            }
        )
    )}
   
    return (
        <div>
            <h1>saved characters</h1>

            <div className="container">
                <div className="row gap-5">
                    {renderCards()}
                </div>
            </div>

            <NavLink to="/">
                <button>Back Home</button>
            </NavLink>
        </div>
    )
}

export default SavedCharacters;