import React, { Component } from 'react'
import './Start.css'

class Start extends Component {

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 center-page">
                        <h1>Hangman</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="background"></div>
                </div>
                <div className="row">
                    <div className="col-sm-12 center-page">
                        <button className="btn-lg btn-primary" onClick={this.props.start} type="submit">Start Game</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Start