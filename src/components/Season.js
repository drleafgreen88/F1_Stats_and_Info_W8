import React from 'react';

const Season = ({season_url, year}) => {

    // const handleClick = function(){
    //     onSeasonClick(season_url);
    // }


    // return <li onSeasonClick = {handleClick}>{year} <br/>{season_url}</li>

    return <div class="season_results">
        {year}
        <br/>
        <a href={season_url}>Season Recap</a>
    </div> 
}




export default Season;