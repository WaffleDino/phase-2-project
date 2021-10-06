import logo from '../logo.svg';
import '../App.css';
import {Browser, Route, Switch} from "react-router-dom"
import AbilityScores from "./AbilityScores";
import CharacterBio from  "./CharacterBio";
import Equipment from "./Equipment";
import Home from "./Home";
import NavBar from './NavBar';
import Spells from "./Spells";
import CompletedSheet from "./CompletedSheet";


function App() {
  return (
    <>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>

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
          <Spells />
        </Route>

        <Route exact path="/completedSheet">
          <CompletedSheet />
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
