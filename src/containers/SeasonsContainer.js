import React from 'react';
import SeasonsList from '../components/SeasonsList';

const SeasonsContainer = ({seasons}) => {
    return (
        <div>
            <SeasonsList seasons={seasons}/>
        </div>
    )
}



export default SeasonsContainer