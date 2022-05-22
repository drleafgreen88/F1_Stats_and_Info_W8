import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import UserContext from '../context/UserContext';
import Header from '../components/Header';
import SeasonsContainer from './SeasonsContainer';
import { useModal } from '../hooks/useModal';

const MainContainer = () => {

    const [user, setUser] = useState({
        name: ('Kimi Raikkonen'),
        email: ('Iceman@F1.com'),
    })

    const [seasons, setSeasons] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState(null);
    // const [seasonResults, setSeasonResults] = useState([]);

    useEffect(() => {
        getSeasons();
    }, [])

    // useEffect(() => {
    //     getSeasonResults();
    // }, [])

    const getSeasons = function () {
        fetch("https://ergast.com/api/f1/driverStandings/1.json?limit=1000")
            .then(response => response.json())
            .then(seasons => setSeasons(seasons.MRData.StandingsTable.StandingsLists));
    }

    // const getSeasonResults = function () {
    //     fetch("http://ergast.com/api/f1/driverstandings/1.json?limit=100")
    //     .then(response => response.json())
    //     .then(seasonResults => setSeasonResults(seasonResults.MRData.DriverStandings.Seasons))
    // }

    const onSeasonClick = function (season) {
        setSelectedSeason(season);
    }

    const handleUserChange = (event) => {
        setUser(event.target.value)
    }

    const {isModalOpen, toggleModal} = useModal()


    return (
        <>
            <Modal
                isOpen={isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
            >
                <label htmlFor='name'>Your name: </label>
                <input type="text" name="name" placeholder={user.name} onChange={handleUserChange} />
                <label htmlFor='email'>Your email: </label>
                <input type="text" email="email" placeholder={user.email} onChange={handleUserChange} />
                <br></br>
                <button onClick={toggleModal}>OK</button>
            </Modal>

            <UserContext.Provider value={{ user, setUser }}>
                <Header user={user} />
                <SeasonsContainer seasons={seasons} />
            </UserContext.Provider>
        </>
    )
}


export default MainContainer