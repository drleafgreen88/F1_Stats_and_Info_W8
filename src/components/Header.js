import React, {useState} from 'react'

const Header = ({user}) => {
    // const [basketActive, setBasketActive] = useState(false)

    // const handleBasketClick = () => {
    //     setBasketActive(!basketActive)
    // }

    return (
        <header>
            <hgroup>
                <h1>Formula One</h1>
                <h3>Stats and Information</h3>
            </hgroup>
            <div id="user-info">
                <h3>Welcome back {user.name}!</h3>
                {/* <h4>You have {user.basket.length} items in your basket.</h4>
                <button onClick={handleBasketClick}>Go to Basket</button>
                {basketActive && <Basket user={user}/>} */}
            </div>
        </header>
    )
}

export default Header