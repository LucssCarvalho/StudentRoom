import React, { Component } from 'react'
import '../Styles/ViewLogin.css'
import teacher from '../images/teacher.png'

class ViewLogin extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="Login">
        <header className="Login-header">
        </header>
        <div className="container">
          <form>
            <div className="title_question">
            <img className="img-logo_teacher" src={teacher}></img>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Login e Senha</span>
                </div>
                <input type="text" placeholder="professor@teste.com.br" class="form-control"></input>
                <input type="text" placeholder="********" class="form-control"></input>
              </div>
              <input className="btn btn-success btn-lg btn-block" type="submit" value="Enviar" />
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.nextPath('/viewTypeLogin')}>Sair</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ViewLogin;
