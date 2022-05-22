import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import UserContext from '../context/UserContext';
import Header from '../components/Header';
import SeasonsContainer from './SeasonsContainer';
import Kimi from '../components/Kimi';
import { useModal } from '../hooks/useModal';

const MainContainer = () => {

    const [name, setName] = useState('F1 Fan')
    const [email, setEmail] = useState('F1Fan@F1.com');

    const [seasons, setSeasons] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState(null);

    useEffect(() => {
        getSeasons();
    }, [])


    const getSeasons = function () {
        fetch("https://ergast.com/api/f1/driverStandings/1.json?limit=1000")
            .then(response => response.json())
            .then(seasons => setSeasons(seasons.MRData.StandingsTable.StandingsLists));
    }


    const onSeasonClick = function (season) {
        setSelectedSeason(season);
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const {isModalOpen, toggleModal} = useModal()


    return (
        <>
            <Modal id="modal"
                isOpen={isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
            >
                <label htmlFor='name'>Your name: </label>
                <input type="text" name="name" placeholder={name} onChange={handleNameChange} />
                <label htmlFor='email'>Your email: </label>
                <input type="text" email="email" placeholder={email} onChange={handleEmailChange} />
                <br></br>
                <button onClick={toggleModal}>OK</button>
            </Modal>

            <UserContext.Provider value={{ name, email }}>
                <Header name={name} email={email}/>
                <Kimi />
                <SeasonsContainer seasons={seasons} />
            </UserContext.Provider>
        </>
    )
}


export default MainContainer