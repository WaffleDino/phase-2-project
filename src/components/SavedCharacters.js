import React from "react";
import { NavLink } from "react-router-dom";

function SavedCharacters() {
    return (
        <div>
            <h1>
            saved characters
            </h1>






            <div className="container">

    <div className="row gap-5">


      <div className="col-sm-3">
        <div className="card">
          <img src="https://placekitten.com/200/200" className="card-img-top" alt="Placekitten" />
          <div className="card-body">
            <h5 className="card-title">Orc Man</h5>
            <p className="card-text">Level 2, Warrior, Chaotic Good</p>
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
                <p>Info</p>
                <p>About</p>
                <p>The</p>
                <p>Great</p>
                <p>Orc-Man</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
</div>














            <NavLink to="">
                <button>Back Home</button>
            </NavLink>
        </div>
    )
}

export default SavedCharacters;