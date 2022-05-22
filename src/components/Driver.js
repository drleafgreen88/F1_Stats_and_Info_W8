import React from 'react';

const Driver = ({winner}) => {

return (

    <div class="details">
        <h3>Driver Information</h3>
        <ul>
            <li>
                Name: {winner.givenName + ' ' + winner.familyName}
            </li>
            <li>
                Date of Birth: {winner.dateOfBirth}
            </li>
            <li>
                Nationality: {winner.nationality}
            </li>
            <li>
                <a href={winner.url} target="blank">Driver Bio</a>
            </li>
        </ul>
    </div>

)
}

export default Driver