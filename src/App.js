import React, { Component } from 'react';
import './App.css';
import GameContainer from './containers/GameContainer'
import StartContainer from './containers/StartContainer'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
    render() {

        return (
            <div>
                <StartContainer />
            </div>
        )
        /*return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                    </ul>

                    <hr/>
                    <Route path="/" component={GameContainer.js}/>
                    <Route path="/posts/:post_id" component={PostContainer}/>
                </div>
            </Router>
        );*/
    }
}

export default App;