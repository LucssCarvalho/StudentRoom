import React, { Component } from 'react'
import '../Styles/GetQuestions.css';
import QuestionPreview from "../Components/QuestionPreview";

class GetQuestions extends Component {
  render() {

  return (
    <div className="Login">
      <header className="Login-header">
      </header>
      <div className="title_question"><h1>Perguntas salvas</h1></div>
        <div className="list_questions">
        <QuestionPreview/>
        </div>
      </div>
    );
  }
}
export default GetQuestions;
