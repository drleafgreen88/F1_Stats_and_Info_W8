import React, {useState, useEffect} from 'react';
import UserContext from '../context/UserContext';
import Header from '../components/Header';
import SeasonsContainer from './SeasonsContainer';

const MainContainer = () => {

    const [user, setUser] = useState({
        name: "Kimi Raikkonen",
        email: "ice-man@f1.com",
    })

    const [seasons, setSeasons] = useState([]);
    const [selectedSeason, setSelectedSeason] = useState(null);

    useEffect(() => {
        getSeasons();
    }, [])

    const getSeasons = function () {
        fetch("http://ergast.com/api/f1/seasons.json?limit=100")
        .then(response => response.json())
        .then(seasons => setSeasons(seasons.MRData.SeasonTable.Seasons));
    }

    const onSeasonClick = function(season) {
        setSelectedSeason(season);
    }


    return (
        <div>
        <UserContext.Provider value={{user, setUser}}>
            <Header user={user}/>
            <SeasonsContainer seasons={seasons}/>
        </UserContext.Provider>
    </div>
    )
}


export default MainContainer