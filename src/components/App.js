// might have to install react-select "npm install react-select --save"


import '../App.css';
import {Route, Switch} from "react-router-dom"
import AbilityScores from "./AbilityScores";
import CharacterBio from  "./CharacterBio";
import Equipment from "./Equipment";
import Home from "./Home";
import NavBar from './NavBar';
import React, {useState} from 'react';
import SpellContainer from './SpellContainer';
import CompletedSheet from "./CompletedSheet";
import SavedCharacters from './SavedCharacters';



function App() {
  const [selectedSpells, setSelectedSpells] = useState([])
  
  const [spells, setSpells] = useState([{
    spell: "", 
  }])
  
  //this state to save the completed characterbio info and send it down to the completed sheet
  const [characterInfo, setCharacterInfo] = useState({})

  //this state to save the completed equipment info and send it down to the completed sheet
  const [finishedEquipment, setFinishedEquipment] = useState({})


  return (
    <>
  <div>
  <NavBar />
      <Switch>
        <Route exact path="/characterBio">
          <CharacterBio setCharacterInfo={setCharacterInfo} />
        </Route>

        <Route exact path="/abilityScores">
          <AbilityScores />
        </Route>

        <Route exact path="/equipment">
          <Equipment setFinishedEquipment={setFinishedEquipment} />
        </Route>

        <Route exact path="/spells">
          <SpellContainer setSpells={setSpells} spells={spells} selectedSpells={selectedSpells} setSelectedSpells={setSelectedSpells} />
        </Route>

        <Route exact path="/completedSheet">
          <CompletedSheet characterInfo={characterInfo} finishedEquipment={finishedEquipment} selectedSpells={selectedSpells} />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/savedcharacters">
          <SavedCharacters />
        </Route>

      </Switch>
  </div>



    </>
  );
}

export default App;
