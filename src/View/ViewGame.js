import React, { Component } from 'react'
import socket from 'socket.io'
import socketIOClient from 'socket.io-client';
import '../Styles/ViewGame.css'

class ViewGame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            yourTeam: '',
            currTeam: '',
            showDivQuestion: false,
            question: {},
            selectedAnswer: '',
            disableStartGameButton: false,
            pinCode:''
        }
        const socket = socketIOClient('http://localhost:3000/')
    }
 

    componentDidMount() {
        
        var self = this;

        socket.on('checkPinCode', function (data) {
            if (data.isOk) {
                self.setState({ yourTeam: data.team })
            } else {
                alert('Team already logged');
            }
        })

        socket.on('setCurrentTeam', function (data) {
            console.log(data);
            var currTeam = data.team;

            self.setState({ currTeam })
            self.setState({ showDivQuestion: false })

            if(currTeam == self.state.yourTeam) socket.emit('sendQuestion');
        });

        socket.on('startGame', function (data) {
            if (data.started) {
                let currTeam = data.team
                self.setState({ disableStartGameButton: true })
                self.setState({ currTeam })

                if(currTeam == self.state.yourTeam) socket.emit('sendQuestion');
            } else {
                alert('Aguarde o outro time logar');
            }
        });

        socket.on('question', function (data) {
            var team = data.currTeam;
            var question = data.question;
      
            if (team == self.state.yourTeam) {
                if (question) {
                    self.setState({ question })
                } else {
                    alert('Todas perguntas respondidas');
                }
            }
        });

        socket.on('gameOver', function (winner) {
            if (winner.toLowerCase() == 'tie') {
                alert('It\'s a tie');
            } else {
                alert('The winner is ' + winner);
            }
        });

    // BUTTONS
     }

    checkPinCode() {
    socket.emit('checkPinCode', 
    { code: this.state.pinCode });
    }

    startGame() {
        socket.emit('startGame',
        { team: this.state.currTeam });
    }

    onAnswerChange(event) {
        this.setState({ selectedAnswer: event.currentTarget.value })
    }

    sendAnswer() {
        socket.emit('verifyQuestion', 
        { 
        answer: this.state.selectedAnswer,
        questionId: this.state.question.questionId });
        }

    render() {
        const {
            currTeam,
            yourTeam,
            question,
            selectedAnswer,
            disableStartGameButton,
            showDivQuestion} = this.state

        return (
            <input>
                {yourTeam}
                <div><h1>{currTeam}</h1></div>
                Esse é seu time: {yourTeam}
                {showDivQuestion && <div id="question">
                </div>}

                <button id='startGame' disabled={disableStartGameButton}> Iniciar jogo </button>
                <div>{question.data.question} 
                    <ul>
                        {question.data.answers.map(answer => 
                        <li><input type="radio" name="el" value={answer} checked={selectedAnswer === answer} onChange={this.onAnswerChange} /> {answer} </li> )}
                    </ul>
                </div>

                <button id='verifyQuestion' onClick={this.sendAnswer}></button>
            </input>
        );
    }
}
export default ViewGame;
