import React, { Component } from 'react'
import '../Styles/GetQuestions.css';
import QuestionPreview from "../Components/QuestionPreview";

class GetQuestions extends Component {
  render() {

    const nextPath = (path) => {
      this.props.history.push(path);
    }

  return (
    <div className="container">
      <header className="Login-header">
      </header>
      <div className="title_question">
        <h5>Lista de perguntas</h5>
        </div>
        <div className="list_questions">
        <QuestionPreview/>
        </div>
        <button className="btn btn-primary btn-lg btn-block" 
        onClick={() => nextPath ('/viewmenu')}>Voltar
        </button>
      </div>
    );
  }
}
export default GetQuestions;
