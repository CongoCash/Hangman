import React, {Component} from 'react'
import Start from '../components/start/Start'
import GameContainer from './GameContainer'

class StartContainer extends Component {

    constructor(){
        super()
        this.state = {
            start: false
        }
    }

    start() {
        this.setState({
            start: true
        })
    }

    render() {

        if (this.state.start === false) {
            return (
                <div>
                    <Start
                        start={this.start.bind(this)}
                    />
                </div>
            )
        }
        else {
            return (
                <div>
                    <GameContainer />
                </div>
            )
        }
    }
}

export default StartContainer