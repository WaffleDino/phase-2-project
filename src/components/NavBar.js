import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
    <div>
      <NavLink
      to=""
      >
        Home 
      </NavLink>
  
  
      <NavLink
      to="/characterBio"
      >
        CharacterBio 
      </NavLink>
  
  
      <NavLink
      to="/abilityScores"
      >
        AbilityScores
      </NavLink>
  
  
      <NavLink
      to="/equipment"
      >
        Equipment
      </NavLink>
  
      <NavLink
      to="/spells"
      >
        Spells
      </NavLink>

      <NavLink
      to="/completedSheet"
      >
        Completed Sheet
      </NavLink>      
  
    </div>
    )
  }
  
  export default NavBar;