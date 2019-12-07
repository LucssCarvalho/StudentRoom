import React, { Component } from 'react'
import socket from 'socket.io'
import socketIOClient from 'socket.io-client';
import '../Styles/ViewGame.css'

class ViewGame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            socketURL:'http://localhost:3000/',
            yourTeam: '',
            currTeam: '',
            showDivQuestion: false,
            question: {},
            selectedAnswer: '',
            disableStartGameButton: false,
            pinCode:''
        }
     
    }
 
    componentDidMount() {
        const socket = socketIOClient(this.state.socketURL)
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

            if(currTeam === self.state.yourTeam) socket.emit('sendQuestion');
        });

        socket.on('startGame', function (data) {
            if (data.started) {
                let currTeam = data.team
                self.setState({ disableStartGameButton: true })
                self.setState({ currTeam })

                if(currTeam === self.state.yourTeam) socket.emit('sendQuestion');
            } else {
                alert('Aguarde o outro time logar');
            }
        });

        socket.on('question', function (data) {
            var team = data.currTeam;
            var question = data.question;
      
            if (team === self.state.yourTeam) {
                if (question) {
                    self.setState({ question })
                } else {
                    alert('Todas perguntas respondidas');
                }
            }
        });

        socket.on('gameOver', function (winner) {
            if (winner.toLowerCase() === 'tie') {
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
            showDivQuestion,
            pinCode} = this.state

        return (
        <div className="container">

              {/* ////// TITULO do TIME /////  */}
            <div className="title_question">
            {yourTeam}
            <div><h4>Seu time atual: {currTeam}</h4></div>
                <div><h4>Esse é seu time: {yourTeam}</h4></div>
            </div>
            {/* ////// FINAL DO TITULO do TIME /////  */}

            {/* ////// Form do PINCODE /////  */}
            <form className="container">
            <div className="input-label-checkpin">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">Digite o PinCode</span>
                </div>
                <input type="number"   className="form-control" name="pinCode" id="pinCode"></input>
                <button type="submit"  className="btn btn-success" id='verificarPin' className="btn btn-success" onClick={pinCode === pinCode}> Verificar </button>
            </div>
            </div>
            </form>
            {/* ////// FINAL DO Form do PINCODE /////  */}
            
            {/* {showDivQuestion &&<div id="question"></div>}
             */}

            <button class="btn btn-warning btn-lg btn-block" id='startGame' disabled={disableStartGameButton}> Iniciar jogo </button>

            <div><h1>{question.data.question}</h1> 
                <ul>
                    {question.data.answers.map(answer => 
                    <li><input type="radio" name="el" value={answer} checked={selectedAnswer === answer} onChange={this.onAnswerChange} /> {answer} </li> )}
                </ul>
            </div>

            <button id='verifyQuestion' onClick={this.sendAnswer}></button>
        </div>
        );
    }
}
export default ViewGame;
