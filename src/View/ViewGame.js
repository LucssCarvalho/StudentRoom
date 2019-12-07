import React, { Component } from 'react'
import socketIOClient from 'socket.io-client';
import '../Styles/ViewGame.css'

class ViewGame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            socket: '',
            socketURL: 'https://tcc-unip.herokuapp.com/e6025c1f-ea61-47c6-b569-83fd7398ec25',
            yourTeam: '',
            currTeam: '',
            showDivQuestion: false,
            question: {},
            selectedAnswer: '',
            disableStartGameButton: true,
            pinCode: '',
            showPinForm: true,
            showButtonStart:true
        }
        this.startGame = this.startGame.bind(this)
        this.onChangePinCode = this.onChangePinCode.bind(this)
        this.checkPinCode = this.checkPinCode.bind(this)
    }

    componentDidMount() {
        const socket = socketIOClient(this.state.socketURL)
        this.setState({ socket })

        var self = this;

        socket.on('checkPinCode', function (data) {
            console.log(data)
            if (data.isOk) {
                self.setState({ yourTeam: data.team })
                self.setState({ disableStartGameButton: false })
            } else {
                alert('Team already logged');
            }
        })

        socket.on('setCurrentTeam', function (data) {
            console.log(data);
            var currTeam = data.team;

            self.setState({ currTeam })
            self.setState({ showDivQuestion: false })

            if (currTeam === self.state.yourTeam) socket.emit('sendQuestion');
        });

        socket.on('startGame', function (data) {
            if (data.started) {
                let currTeam = data.team
                self.setState({ showButtonStart: false })
                self.setState({ showPinForm: false })
                self.setState({ currTeam })

                if (currTeam === self.state.yourTeam) socket.emit('sendQuestion');
                console.log("questao enviada")
                console.log(currTeam)
                console.log(self.state.yourTeam)
            } else {
                alert('Aguarde o outro time logar');
            }
        });

        socket.on('question', function (data) {
            console.log(data)
            var team = data.currTeam;
            var question = data.question;

            if (team === self.state.yourTeam) {
                if (question) {
                    self.setState({ question, showDivQuestion: true })
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
        this.state.socket.emit('checkPinCode',
            { code: this.state.pinCode });
    }

    startGame() {
        this.state.socket.emit('startGame',
            { team: this.state.currTeam });
    }

    onAnswerChange(event) {
        this.setState({ selectedAnswer: event.currentTarget.value })
    }

    sendAnswer() {
        this.state.socket.emit('verifyQuestion',
            {
                answer: this.state.selectedAnswer,
                questionId: this.state.question.questionId
            });
    }

    onChangePinCode(event) {
        this.setState({ pinCode: event.target.value })
    }

    render() {
        const {
            currTeam,
            yourTeam,
            question,
            selectedAnswer,
            disableStartGameButton,
            showDivQuestion,
            pinCode,
            showPinForm,
            showButtonStart} = this.state

        return (
            <div className="container">

                {/* ////// TITULO do TIME /////  */}
                <div className="title_question">
                    <div><h4>Bem vindo</h4></div>
                    <h4>{yourTeam}</h4>
                </div>
                {/* ////// FINAL DO TITULO do TIME /////  */}

                {/* ////// Form do PINCODE /////  */}
                {showPinForm &&
                <div className="container">
                    <div className="input-label-checkpin">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Digite o PinCode</span>
                            </div>
                                <input type="number" className="form-control" name="pinCode" id="pinCode" value={pinCode} onChange={this.onChangePinCode}></input>
                                <button type="button" className="btn btn-success" id='verificarPin' onClick={this.checkPinCode}> Verificar </button>
                        </div>
                    </div>
                </div>}
                {/* ////// FINAL DO Form do PINCODE /////  */}
                 {showButtonStart &&
                     <button class="btn btn-warning btn-lg btn-block" id='startGame' disabled={disableStartGameButton} onClick={this.startGame}> Iniciar jogo </button>
                 }
                {showDivQuestion && <div>
                    <h1>{question.data.question}</h1>
                    <ul>
                        {question.data.answers.map(answer =>
                            <li><input type="radio" name="el" value={answer} checked={selectedAnswer === answer} onChange={this.onAnswerChange} /> {answer} </li>)}
                    </ul>
                    <button id='verifyQuestion' onClick={this.sendAnswer}>Enviar Reposta</button>
                </div>}
            </div>
        );
    }
}
export default ViewGame;
