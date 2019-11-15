import React, { Component } from 'react'
import '../Styles/ViewMenu.css'

class ViewMenu extends Component {
  render() {
  return (
    <div className="ViewMenu">
      <header className="ViewMenu-header">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossorigin="anonymous"> 
        </link>
      </header>
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
    );
  }
}
export default ViewMenu;
