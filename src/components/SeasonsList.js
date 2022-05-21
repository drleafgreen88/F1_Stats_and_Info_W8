import React from 'react';
import Season from './Season';

const SeasonList =({seasons}) => {
    
    const seasonNodes = seasons.map((season) => {
        return <Season year={season.season} season_url={season.url} key={season.season} />
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