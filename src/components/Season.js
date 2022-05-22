import React from 'react';
import Driver from './Driver';
import Constructor from './Constructor';

const Season = ({ year, total_rounds, winner, constructor }) => {

    const showDriverPopup = function () {
        Array.from(document.getElementsByClassName("pop_up")).forEach(element => { element.style.display = "none" });
        document.getElementById(year).style.display = "block";
    }

    const showConstructorPopup = function () {
        Array.from(document.getElementsByClassName("pop_up")).forEach(element => { element.style.display = "none" });
        document.getElementById(year + constructor.name).style.display = "block";
    }

    const closePopUp = function (event) {
        event.target.parentElement.style.display = "none";
    }

    return <div class="season_results">
        <h1><u>{year}</u></h1>

        Number of Rounds: {total_rounds}
        <br />
        Driver Champion: {winner.givenName + ' ' + winner.familyName}
        <button onClick={showDriverPopup}>Driver Information</button>
        {/* <br/> */}
        Manufacturer Driven: {constructor.name}
        <button onClick={showConstructorPopup}>Constructor Information</button>
        <div id={year.toString()} class="pop_up">
            <Driver winner={winner} />
            <button onClick={closePopUp}>Close Me!</button>
        </div>
        <div id={year.toString() + constructor.name} class="pop_up">
            <Constructor constructor={constructor} />
            <button onClick={closePopUp}>Close Me!</button>
        </div>
    </div>
}




export default Season;