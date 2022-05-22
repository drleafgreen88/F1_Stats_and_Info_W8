import React, {useState} from 'react'
import { useModal } from '../hooks/useModal';

const Header = ({user}) => {

    return (
        <header>
            <hgroup>
                <h1>Formula One</h1>
                <h3>Stats and Information</h3>
            </hgroup>
            <div id="user-info">
                <h3>Welcome back {user.name}!</h3>
                <h4>{user.email}</h4>
            </div>
        </header>
    )
}

export default Header