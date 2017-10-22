import React, { Component } from 'react'

class Game extends Component {

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <form onSubmit={this.props.onSubmit}>
                            <input onInput={this.props.onInput} type="text" name="input" maxLength="1"/>
                            <button type="submit">Guess</button>
                        </form>
                        <h1>{this.props.userAnswerView}</h1>
                        <h1>{this.props.message}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game