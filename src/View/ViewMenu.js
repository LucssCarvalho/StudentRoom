import React, { Component } from 'react'
import '../Styles/ViewMenu.css'

class ViewMenu extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }
  
  render() {
  return (
    <div className='container'>
      <header className="container">
      </header>
      <div className="ViewMenu">
        <div className="container">
        <div className="title_question"><h1>Bem-Vindo</h1></div>
        <div className="label_menu">
          <div className="label_btn">
            <button type="button" className="btn btn-primary btn-lg btn-block"
            onClick={() => this.nextPath ('/viewcreatequestion')}>Criar pergunta</button>

               <button type="button" className="btn btn-primary btn-lg btn-block"
            onClick={() => this.nextPath ('/viewcreateroom')}>Criar sala</button>

            <button type="button" className="btn btn-primary btn-lg btn-block"
            onClick={() => this.nextPath ('/getquestions')}>Visualizar perguntas</button>

            <button type="button" className="btn btn-primary btn-lg btn-block">Visualizar relatórios</button>
            <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.nextPath ('/viewlogin')}>Sair</button>
          </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
  // 
}
export default ViewMenu;
