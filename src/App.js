import React, { Component } from 'react';
import { robots } from './Robots';
import Searchbox from './Searchbox';
import CardList from './CardList';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log('test');
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList robots = {filteredRobots}/>
            </div>
        );
    }   
}

export default App;