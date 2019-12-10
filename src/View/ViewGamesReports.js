import React, { Component } from 'react';
import axios from 'axios';
import '../Styles/ViewGameReports.css';
import { Link } from 'react-router-dom';

class ViewGamesReports extends Component {

    constructor() {
        super();

        this.state = {
            classrooms: [],
            themes: [],
            selectedTheme: '',
            selectedClassroom: '',
            games: [],
            Theme:''
        };

        this.selectClassroom = this.selectClassroom.bind(this);
        this.selectTheme = this.selectTheme.bind(this);
        this.searchGames = this.searchGames.bind(this);
        this.getClassrooms();
        this.getThemes();
    }

    async getThemes() {
        const themes = await axios.get('https://tcc-unip.herokuapp.com/themes');
        
        this.setState({ Theme: themes.data});
        console.log(this.state.Theme)
    }

    selectTheme(event) {
        this.setState({ selectedTheme: event.target.value });
    }

    selectClassroom(event) {
        this.setState({ selectedClassroom: event.target.value });
    }

    async getClassrooms() {
        const classrooms = await axios.get('https://tcc-unip.herokuapp.com/classrooms');
        
        this.setState({ classrooms: classrooms.data.data });
    }

    nextPath(path) {
        this.props.history.push(path);
      }
    

    async searchGames() {
        const { selectedClassroom, selectedTheme } = this.state;
        
        if(selectedClassroom !== '' && selectedTheme !== ''){
            const games = await axios.get('https://tcc-unip.herokuapp.com/games', 
            { params: { "theme": selectedTheme, "classroomId":  selectedClassroom }});

            this.setState({ games: games.data.orderedGames });
        }else {
            alert('Preencha os campos para pesquisar');
        }
    }

    renderGameCard(game) {
        const {
            id,
            theme,
            creationDate,
            teams,
            winner
        } = game;

        let formattedDate = creationDate.split(' ')[0].split('-')
        formattedDate = formattedDate[2] + '/' + formattedDate[1] + '/' + formattedDate[0]

        return(
            <Link 
                key={id} 
                className='gameCard'
                to={{
                    pathname: '/viewGamesDetail',
                    data: game
                }}
            >
                <div className='gameInfo'>
                    <span className='gameTitle'> { theme } </span>
                    <span className='gameData'> { formattedDate } </span>
                </div>

                <div className='line'></div>

                <div className='gameTeams'>
                    {
                        teams.map((team, index) => {
                            const isWinner = team.teamName === winner;
                            let classes = 'team';

                            if(isWinner) classes += ' winner';
                            else classes += ' loser';

                            return(
                                <>
                                    <div key={team.teamName} className={classes}>
                                        <span> { team.teamName } </span>
                                        <span> { team.answeredQuestions.filter(question => question.isCorrect).length * 10 } pontos </span>
                                    </div>

                                    {
                                        (index !== teams.length - 1)? <span className='X'> X </span>: ''
                                    }
                                </>
                            );
                        })
                    }
                </div>
            </Link>
        );
    }

    render() {
        return(
            <>
                <form className='formSearch'>
                    <div className='inputs'>
                        <select className='select' value={this.state.selectedClassroom} onChange={this.selectClassroom}>
                            <option> Selecione a sala </option>

                            { this.state.classrooms.map(classroom =>
                                <option 
                                    key={classroom.id} 
                                    value={classroom.id}> 
                                        { classroom.data.name + ' - ' + classroom.data.period } 
                                </option>
                            )}
                        </select>

                        <select className='select' value={this.state.selectedTheme} onChange={this.selectTheme}>
                            <option> Selecione o tema </option>
                            { 
                               this.state.Theme && this.state.Theme.themes.map(theme => <option key={theme.data.Theme} value={theme.data.Theme}> {theme.data.Theme} </option>)
                            }
                        </select>
                    </div>

                    <input className='search' className="btn btn-warning btn-lg btn-block" type='submit' value='Pesquisar' onClick={this.searchGames} />
                    <input type='button' className="btn btn-primary btn-lg btn-block" value='Voltar' onClick={() => this.nextPath('/viewmenu')}/>
                </form>
                <div className='games'>
                    {this.state.games.map(game => this.renderGameCard(game))}
                </div>
            </>
        );
    }
};

export default ViewGamesReports;