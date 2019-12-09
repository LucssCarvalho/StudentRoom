import React, { Component } from 'react'
import socketIOClient from 'socket.io-client';
import '../Styles/ViewGame.css'

class ViewGame extends Component {
    constructor(props) {
        super(props)

        this.state = {
            socket: '',
            socketURL: 'https://tcc-unip.herokuapp.com/7722ab72-a3a3-4b78-8445-42d7d6baf868',
            yourTeam: '',
            currTeam: 'Team A',
            showDivQuestion: false,
            question: {},
            selectedAnswer: '',
            disableStartGameButton: true,
            pinCode: '',
            showPinForm: true,
            showButtonStart: true,
            showResultado: false,
            vencedor: '',
            showResultadoEmpate: false
        }
        this.startGame = this.startGame.bind(this)
        this.onChangePinCode = this.onChangePinCode.bind(this)
        this.checkPinCode = this.checkPinCode.bind(this)
        this.sendAnswer = this.sendAnswer.bind(this)
        this.onAnswerChange = this.onAnswerChange.bind(this)
    }

    componentDidMount() {
        const socket = socketIOClient(this.state.socketURL)
        this.setState({ socket })

        var self = this;

        socket.on('checkPinCode', function (data) {
            if (data.isOk) {
                self.setState({ yourTeam: data.team })
                self.setState({ disableStartGameButton: false })
            } else {
                alert('Team already logged');
            }
        })

        socket.on('setCurrentTeam', function (data) {
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

                if (currTeam === self.state.yourTeam) {
                    socket.emit('sendQuestion')
                }
            } else {
                alert('Aguarde o outro time logar');
            }
        });

        socket.on('question', function (data) {
            self.setState({ selectedAnswer: '' })
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
            self.setState({ vencedor: winner })
            self.setState({ showDivQuestion: false })
            self.setState({ showResultado: true })
            if (winner.toLowerCase() === 'tie') {
                self.setState({ showResultadoEmpate: true })
                // alert('Empate');
            } else {
                // alert('Vencedor: ' + winner);
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
        console.log(event.currentTarget.value);
    }

    sendAnswer() {
        this.state.socket.emit('verifyQuestion',
            {
                answer: this.state.selectedAnswer,
                questionId: this.state.question.id
            });
    }

    onChangePinCode(event) {
        this.setState({ pinCode: event.target.value })
    }

    nextPath(path) {
        this.props.history.push(path);
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
            showButtonStart,
            showResultado,
            showResultadoEmpate,
            vencedor } = this.state

        return (
            <div className="container">

                <div className="title_question">
                    <div><h4>Bem vindo</h4></div>
                    <h4>{yourTeam}</h4>
                </div>

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

                {showButtonStart &&
                <div>
                    <button class="btn btn-warning btn-lg btn-block" id='startGame' disabled={disableStartGameButton} onClick={this.startGame}> Iniciar jogo </button>
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.nextPath ('/viewTypeLogin')}>Voltar</button>
                </div>
                }
                {showDivQuestion && <div className="title_question">
                    <h1>{question.data.question}</h1>
                    <ul>
                        {question.data.answers.map(answer =>
                            <li><input type="radio" name="answer" value={answer} checked={selectedAnswer === answer} onChange={this.onAnswerChange} /> {answer} </li>)}
                    </ul>
                    <button id='verifyQuestion' class="btn btn-success" onClick={this.sendAnswer}>Enviar Reposta</button>
                </div>}

                {showResultado &&
                    <div className="title_question"><h4>Vencedor: {vencedor}</h4>
                        <button class="btn btn-warning btn-lg btn-block" > Voltar </button>
                    </div>
                }

                {showResultadoEmpate &&
                    <div className="title_question"><h4>Empate</h4>
                        <button class="btn btn-warning btn-lg btn-block" > Voltar </button>
                    </div>
                }
            </div>

        );
    }
}
export default ViewGame;
