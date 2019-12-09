import React, { Component } from 'react';
import '../Styles/viewGameDetail.css';

class ViewGameDetail extends Component {
    constructor() {
        super();

        this.state = {
            currentQuestion: ''
        }
    }

    render() {
        const { data } = this.props.location;

        return (
            <>
                <h5 className='title'> {data.theme} </h5>

                <div className='scores'>
                    {
                        data.teams.map((team, index) => {
                            const isWinner = team.teamName === data.winner;
                            let classes = 'teamCard';

                            if (isWinner) classes += ' winner';
                            else classes += ' loser';

                            return (
                                <>
                                    <div key={team.teamName} className={classes}>
                                        <span> {team.teamName} </span>
                                        <span> {team.answeredQuestions.filter(question => question.isCorrect).length * 10} pontos </span>
                                    </div>

                                    {
                                        (index !== data.teams.length - 1) ? <span className='X'> X </span> : ''
                                    }
                                </>
                            );
                        })
                    }
                </div>

                <div className='questionsHolder'>
                    <span className='questionsTitle'> Perguntas </span>

                    <div className='questionDetails'>
                        <div className='questions'>
                            {
                                data.questions.map(question => {
                                    return (
                                        <details key={question.id} onClick={() => { this.setState({ currentQuestion: question.id }) }}>
                                            <summary className='question'> {question.data.question} </summary>
                                            {
                                                question.data.answers.map(answer => {
                                                    const isCorrect = answer === question.data.correct_answer;
                                                    let className = 'answer';

                                                    if (isCorrect) className = 'answer winner';

                                                    return (<span key={answer} className={className}> {answer} </span>)
                                                })
                                            }
                                        </details>
                                    )
                                })
                            }
                        </div>

                        {
                            (this.state.currentQuestion === '') ?
                                ''
                                :
                                data.teams.map(team => {
                                    const isCorrect = team.answeredQuestions.find(question => {
                                        if (question.questionId === this.state.currentQuestion && question.isCorrect) {
                                            return question;
                                        }
                                    });

                                    let classes = 'teamCard';
                                    let response = '';

                                    if (isCorrect) {
                                        classes += ' winner';
                                        response = 'Acertou!'
                                    }
                                    else {
                                        classes += ' loser';
                                        response = 'Errou';
                                    }

                                    return (
                                        <>
                                            <div key={team.teamName} className={classes}>
                                                <span> {team.teamName} </span>
                                                <span> {response} </span>
                                            </div>
                                        </>
                                    );
                                })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default ViewGameDetail;