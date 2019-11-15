import React, { Component } from 'react'
import '../Styles/GetQuestions.css';
import QuestionPreview from "../Components/QuestionPreview";

class GetQuestions extends Component {
  render() {

  return (
    <div className="Login">
      <header className="Login-header">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossorigin="anonymous"> 
        </link>
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
