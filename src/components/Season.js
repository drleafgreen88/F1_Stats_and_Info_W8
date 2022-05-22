import React from 'react';

const Season = ({year, total_rounds, winner}) => {

    // const handleClick = function(){
    //     onSeasonClick(season_url);
    // }


    // const driverStandings = function () {
    //     fetch("https://ergast.com/api/f1/"+year+"/driverStandings.json?limit=50")
    //     .then(response => response.json())
    //     .then(drivers => console.log(drivers.MRData.StandingsTable.DriverStandings));
    // }


    // return <li onSeasonClick = {handleClick}>{year} <br/>{season_url}</li>

    return <div class="season_results">
        {year}
        <br/>
        {total_rounds}
        <br/>
        {winner.familyName}
        {/* <a href={season_url} target="blank">Season Recap</a> */}
        <div id={year.toString()} class="pop_up"><p>POP UP</p></div>
    </div> 
}




export default Season;