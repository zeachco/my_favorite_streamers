import React, {Component} from 'react';
import autobind from 'auto-bind-es5'
// import {observer} from 'mobx-react';

import TwitchFrame from '../components/TwitchFrame'

const saveToStorage = state => {
    try{
        window.localStorage.setItem('streamers', JSON.stringify(state));
    } catch (e) { /* no porn browser support */ }
    return state;
}

const loadFromStorage = () => {
    try {
        const state = JSON.parse(window.localStorage.getItem('streamers')) || [];
        if(state.streamers) return state;
    } catch (e) { /* no porn browser support */ }
    return  {
        streamers: []
    };
};

class App extends Component {
    constructor(props) {
        super(props);
        autobind(this);
        
        this.state = loadFromStorage();
    }
    
    handleButtonClick() {
        const user = prompt('twitch username');
        if(user) this.addPlayer(user);
    }
    
    handleCloseStream(username) {
        this.setState(s => {
            s.streamers = s.streamers.filter(u => u !==username);
            return saveToStorage(s);
        })
    }
    
    addPlayer(username) {
        this.setState(s => {
            s.streamers.push(username);
            return saveToStorage(s);
        })
    }
    
    render() {
        const {streamers}  = this.state;
        return (
            <div>
                {streamers.map(user => (
                    <TwitchFrame
                        key={user}
                        username={user}
                        onClose={this.handleCloseStream}
                    />
                ))}
                <button className="twitch-user-add" onClick={this.handleButtonClick}>Twitch Player</button>
            </div>
        );
    }
}

export default App;