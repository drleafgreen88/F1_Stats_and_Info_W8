import React from 'react';
import Season from './Season';

const SeasonList =({seasons}) => {
    
    const seasonNodes = seasons.map((season) => {
        return <Season year={season.season} total_rounds={season.round} key={season.season} winner={season.DriverStandings[0].Driver} constructor={season.DriverStandings[0].Constructors[0]} />
    })

    return (
        <div id="season-list">
            <ul>
                {seasonNodes}
            </ul>
        </div>
    )
}


export default SeasonList;