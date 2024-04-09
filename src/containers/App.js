import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: '',
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(robots=>{
            this.setState({robots: robots});
        })
    }

    filterRobots(){
        const { robots, searchField } = this.state;
        return robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
    }

    onSearchChange= (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredRobots = this.filterRobots();
        
        return !this.state.robots.length ? 
        <h1>Loading...</h1> : 
        (            
            <div className="tc">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <h1 className="effect-shine">Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        );
     }
}


export default App;