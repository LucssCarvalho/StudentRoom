import React, { Component } from 'react'
import '../Styles/GetQuestions.css';
import RoomPreview from "../Components/RoomPreview";

class ViewRooms extends Component {
  render() {

    const nextPath = (path) => {
      this.props.history.push(path);
    }
    

  return (
    <div className="container">
      <header className="Login-header">
      </header>
      <div className="title_question">
        <h2>Lista de salas</h2>
        </div>
        <div className="list_questions">
        <RoomPreview/>
        </div>
        <button className="btn btn-primary btn-lg btn-block" 
        onClick={() => nextPath ('/viewmenu')}>Voltar
        </button>
      </div>
    );
  }
}
export default ViewRooms;
