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


function App() {
  const [selectedSpells, setSelectedSpells] = useState([])


  const [spells, setSpells] = useState([{
    spell: "", 
  }])
 


  return (
    <>
  <div>
  <NavBar />
      <Switch>
        <Route exact path="/characterBio">
          <CharacterBio />
        </Route>

        <Route exact path="/abilityScores">
          <AbilityScores />
        </Route>

        <Route exact path="/equipment">
          <Equipment />
        </Route>

        <Route exact path="/spells">
          <SpellContainer setSpells={setSpells} spells={spells} selectedSpells={selectedSpells} setSelectedSpells={setSelectedSpells} />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
  </div>



    </>
  );
}

export default App;
