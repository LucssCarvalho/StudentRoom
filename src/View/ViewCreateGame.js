import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Styles/ViewCreateGame.css';


class ViewCreateGame extends Component {
    constructor() {
        super();

        this.state = {
            steps: [1, 2, 3, 4],
            currentStep: 1,
            themes: [],
            classrooms: [],
            questions: [],
            payload: {
                selectedTheme: '',
                selectedClassroom: '',
                selectedQuestions: [],
            },
            teams: [],
            socketURL: '',
        };

        this.nextStep = this.nextStep.bind(this);
        this.selectTheme = this.selectTheme.bind(this);
        this.selectClassroom = this.selectClassroom.bind(this);
        this.selectQuestion = this.selectQuestion.bind(this);
        this.createGame = this.createGame.bind(this);
    }

    componentDidMount() {
        this.goToStep(this.state.currentStep);
    }

    async getClassrooms() {
        const classrooms = await axios.get('https://tcc-unip.herokuapp.com/classrooms');
        
        this.setState({ classrooms: classrooms.data.data });
    }

    async getThemes() {
        const themes = await axios.get('https://tcc-unip.herokuapp.com/themes');
        
        this.setState({ themes: themes.data.themes });
    }

    async getQuestions() {
        const questions = await axios.get('https://tcc-unip.herokuapp.com/questions',
        {
            params: { 'theme': 'Matematica' }
        });
        
        this.setState({ questions: questions.data.data });
    }

    nextStep() {
        const { currentStep } = this.state;
        let isFilled = false;

        switch(currentStep) {
            case 1:
                isFilled = this.state.payload.selectedTheme !== '';
                break;
            case 2:
                isFilled = this.state.payload.selectedQuestions.length !== 0;
                break;
            case 3:
                isFilled = this.state.payload.selectedClassroom !== '';
                break;
            default:
                isFilled = true;
        }

        if(isFilled) {
            this.setState({ currentStep: currentStep + 1 })
            this.goToStep(currentStep + 1);
        }else {
            alert('Selecione um item')
        }
    }

    goToStep(step) {
        switch(step) {
            case 1:
                this.getThemes();
                break;
            case 2:
                this.getQuestions();
                break;
            case 3:
                this.getClassrooms();
                break;
            default:
        }
    }

    selectTheme(event) {
        const { payload } = this.state;
        this.setState({ payload: { ...payload, selectedTheme: event.target.value }});
    }

    selectClassroom(event) {
        const { payload } = this.state;
        this.setState({ payload: { ...payload, selectedClassroom: event.target.value }});
    }

    selectQuestion(questionId) {
        const { payload: { selectedQuestions } } = this.state;

        selectedQuestions.push(questionId);
        this.setState({ payload: { ...this.state.themespayload, selectedQuestions } });
    }

    async createGame() {
        const { payload: {
            selectedClassroom, selectedQuestions, selectedTheme
        }} = this.state;
        
        if(selectedClassroom !== '' && selectedQuestions.length !== 0 && selectedTheme !== '') {
            const response = await axios.post('https://tcc-unip.herokuapp.com/games', {
                questions: selectedQuestions,
                classroomId: selectedClassroom,
                theme: selectedTheme
            });

            if(response.data.success) {
                alert('Jogo criado com sucesso');
                this.setState({ teams:  response.data.teams, socketURL: response.data.socketConnection });
                this.nextStep();
            }else {
                alert('Erro ao criar o jogo');
            }
        }else {
            alert('Preencha todos os campos');
        }

    }

    renderStep() {
        const { currentStep } = this.state;
        
        switch(currentStep) {
            case 1:
                return (
                    <div className='step' key='1'>
                        <span className='stepDescription'> Selecione o tema do jogo: </span>

                        <select onChange={this.selectTheme}>
                            <option> Selecione o tema </option>
                            {
                                this.state.themes.map(theme => <option key={theme.id} value={theme.data.Theme}> {theme.data.Theme} </option>)
                            }
                        </select>

                        <button className='nextStep' onClick={this.nextStep}> Próximo </button>
                    </div>
                );
            case 2:
                return(
                    <div className='step' key='2'>
                        <span className='stepDescription'> Selecione as perguntas: </span>

                        
                        {
                            this.state.questions.map(question => (
                                <div className='questionHolder' key={question.id}>
                                    <input className='chQuestion' type='checkbox' onClick={() => this.selectQuestion(question.id)} />
                                    <label className='lblQuestion'> { question.data.question } </label>
                                </div>
                            ))
                        }
                        <div className='buttons'>
                            <button className='goBack' onClick={() => { this.setState({ currentStep: currentStep - 1 }) }}> Voltar </button>
                            <button className='nextStep' onClick={this.nextStep}> Próximo </button>
                        </div>
                    </div>
                );
            case 3:
                return(
                    <div className='step' key='3'>
                        <span className='stepDescription'> Selecione a sala: </span>

                        <select onChange={this.selectClassroom}>
                            <option> Selecione a sala </option>
                            {
                                this.state.classrooms.map(classroom =>
                                    <option 
                                        key={classroom.id} 
                                        value={classroom.id}> 
                                            { classroom.data.name + ' - ' + classroom.data.period } 
                                    </option>
                                )
                            }
                        </select>

                        <div className='buttons'>
                            <button className='goBack' onClick={() => { this.setState({ currentStep: currentStep - 1 }) }}> Voltar </button>
                            <button className='nextStep' onClick={this.createGame}> Finalizar </button>
                        </div>
                    </div>
                );
                case 4:
                    return(
                        <div className='step' key='4'>
                            <span className='stepDescription'> PINS: </span>
                            <span> URL: { this.state.socketURL } </span>

                            <div className='gameTeams'>
                                {
                                    this.state.teams.map((team, index) => {
                                        return(
                                            <>
                                                <div key={team.teamName} className='team'>
                                                    <span> { team.teamName } </span>
                                                    <span> { team.pinCode } </span>
                                                </div>
                                            </>
                                        );
                                    })
                                }
                            </div>

                            <Link className='nextStep'
                                to={{
                                    pathname: '/viewmenu',
                                }}> Ir ao menu </Link>
                        </div>       
                    );
            default:
                return '';
        }
    }

    render() {
        const { currentStep, steps } = this.state;
        
        return(
            <>
                <h1 className='pageTitle'> Criar jogo </h1>

                <div className='stepHolder'>
                    <span className='stepStatus'> { currentStep }/{ steps.length } </span>
                    
                    {
                        this.renderStep()
                    }
                    
                </div>
            </>
        );
    }
};

export default ViewCreateGame;