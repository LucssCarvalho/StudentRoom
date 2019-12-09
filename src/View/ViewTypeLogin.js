import React, { Component } from 'react'
import '../Styles/ViewTypeLogin.css'
import student from '../images/student.png'
import teacher from '../images/teacher.png'

class ViewTypeLogin extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className='container'>
        <div className="title_question"><h1>Bem vindo ao StudentRoom</h1><h4>Selecione o acesso</h4></div>
        <div className="title_question">
          <img type="button" src={student} alt="Estudante" onClick={() => this.nextPath('/viewgame')}></img>
          <img type="button" src={teacher} alt="Professor" onClick={() => this.nextPath('/viewlogin')}></img>
        </div>
      </div>
    );
  }
}
export default ViewTypeLogin;
