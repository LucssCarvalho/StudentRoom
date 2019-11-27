import React, { Component } from 'react'
import '../Styles/ViewMenu.css'

class ViewMenu extends Component {
  render() {
  return (
    <div className='ViewMenu'>
      <header className="ViewMenu-header">
      </header>
      <body>
      <div className="ViewMenu">
        <div className="container">
        <div className="title_question"><h1>Bem-Vindo</h1></div>
        <div class="label_menu">
          <div class="label_btn">
            <button type="button" class="btn btn-primary"><a href='#/viewcreatequestion'></a>Criar pergunta</button>
            <button type="button" class="btn btn-primary"><a href='#/getquestions'></a>Visualizar perguntas</button>
            <button type="button" class="btn btn-primary">Visualizar relatórios</button>
            <button type="button" class="btn btn-primary">Configuração</button>
            <button type="button" class="btn btn-primary">Sair</button>
          </div>
        </div>
        </div>
      </div>
      </body>
      </div>

    );
  }
}
export default ViewMenu;
