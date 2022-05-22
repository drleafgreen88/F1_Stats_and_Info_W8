import React from 'react'
import UserContext from '../context/UserContext';

const Header = () => {

    return (
        <>
        <UserContext.Consumer>
        {({name, email}) => {
            return(
        <>       
        <header>
            <hgroup>
                <h1>Formula One</h1>
                <h3>Stats and Information</h3>
            </hgroup>
            <div id="user-info">
                <h3>Welcome back {name}!</h3>
                <h4>{email}</h4>
            </div>
        </header>
        </>
            )}}
        </UserContext.Consumer>
        </>
    )
}

export default Header