import React, { useState, useEffect } from 'react';
import GithubCorner from 'react-github-corner';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
    const [robots, setRobots] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(robots=>{
            setRobots(robots);
        })
    },[]);

    const filterRobots = ()=>{
        //const { robots, searchField } = this.state;
        return robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
    }

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }
    const filteredRobots = filterRobots();
    
        return !robots.length ? 
        <h1>Loading...</h1> : 
        (            
            <div className="tc">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <GithubCorner href="https://github.com/melwaree"/>
                <h1 className="effect-shine">Robofriends</h1>
                <h6 className="effect-shine">Now with React hooks!</h6>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
}


export default App;