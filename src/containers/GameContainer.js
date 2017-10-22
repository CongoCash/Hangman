import React, {Component} from 'react'
import Game from '../components/game/Game'

class GameContainer extends Component {

    constructor(){
        super()
        this.state = {
            answer: [],
            remaining_answer: [],
            user_answer_view: [],
            available_letters: {
                "a": true, "b": true, "c": true, "d": true, "e": true,
                "f": true, "g": true, "h": true, "i": true, "j": true,
                "k": true, "l": true, "m": true, "n": true, "o": true,
                "p": true, "q": true, "r": true, "s": true, "t": true,
                "u": true, "v": true, "w": true, "x": true, "y": true,
                "z": true
            },
            current_input: "",
            message: "",
            correct_answers: []
        }
    }

    componentWillMount(){
        this.startGame()
    }

    submitGuess = (e) => {
        e.preventDefault()
        let new_user_answer_view = this.state.user_answer_view
        if (this.state.available_letters[this.state.current_input] === true) {
            console.log(this.state.available_letters[this.state.current_input]);
            this.setState({
                available_letters: {
                    ...this.state.available_letters, //a : true
                    [this.state.current_input]: false // a: false
                }
            }, () => {
                console.log(this.state.available_letters[this.state.current_input])
            })
        }

        else {
            this.setState({
                message: "You have already chosen that letter, select another letter."
            })
            return;
        }

        this.state.answer.forEach((letter, index) => {
            if (letter == this.state.current_input) {
                new_user_answer_view[index] = letter
            }
        })

        this.setState({
            user_answer_view: new_user_answer_view,
            message: "",
        })

    }

    input = (e) => {
        this.setState({
            current_input: e.target.value
        })
    }

    startGame() {
        let randomWords = require('random-words')
        let newRandomWord = randomWords().split("")
        let new_user_answer_view = new Array(newRandomWord.length).fill('_')
        this.setState({
            answer: newRandomWord,
            remaining_answer: newRandomWord,
            user_answer_view: new_user_answer_view
        })
    }



    render() {

        return(
            <div>
                <div>
                    <Game
                        onInput = {this.input.bind(this)}
                        onSubmit = {this.submitGuess.bind(this)}
                        message = {this.state.message}
                        userAnswerView = {this.state.user_answer_view.join(" ")}
                    />
                </div>
            </div>
        )
    }
}

export default GameContainer