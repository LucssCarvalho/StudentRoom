import React from 'react';
import '../Styles/ViewMenu.css'

function ViewMenu() {
  return (
    <div className="ViewMenu">
      <header className="ViewMenu-header">
      </header>
      <div className="title_question"><h1>Bem-Vindo</h1></div>
      <div class="label_resp">
             <div class="label_btn">
                <button class="btn">Jogar</button>
                <button class="btn">Criar pergunta</button>
                <button class="btn">Visualizar perguntas</button>
                <button class="btn">Visualizar relatórios</button>
                <button class="btn">Configuração</button>
                <button class="btn">Sair</button>
               </div>
           </div>
      </div>
  );
}
export default ViewMenu;
