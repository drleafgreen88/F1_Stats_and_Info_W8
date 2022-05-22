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