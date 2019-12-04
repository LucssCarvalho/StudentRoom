import React, { Component } from 'react'
import '../Styles/GetQuestions.css';
import QuestionPreview from "../Components/QuestionPreview";

class GetQuestions extends Component {
  render() {

  return (
    <div className="container">
      <header className="Login-header">
      </header>
      <div className="title_question">
        </div>
        <div className="list_questions">
        <QuestionPreview/>
        </div>
      </div>
    );
  }
}
export default GetQuestions;
