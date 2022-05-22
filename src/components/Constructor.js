import React from 'react';

const Constructor = ({ constructor }) => {

    return (
        <div class="details">
            <h3>Constructor Information</h3>
            <ul>
                <li>
                    Name: {constructor.name}
                </li>
                <li>
                    Nationality: {constructor.nationality}
                </li>
                <li>
                    <a href={constructor.url} target="blank">More Constructor Info</a>
                </li>
            </ul>
        </div>
    )
}



export default Constructor