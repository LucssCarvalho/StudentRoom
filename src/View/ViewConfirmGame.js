import React, { Component } from 'react'
import '../Styles/ViewConfirmGame.css'

class ViewConfirmGame extends Component {
  render() {
  return (
    <div className="ViewConfirmGame">
      <header className="ViewConfirmGame-header">
      </header>
      <div className="container">
        <div className="title_question"><h1>Vamos jogar ?</h1></div>
            <div class="label_menu">
                <div className="menu_label_right">
                    <h3>Equipe 01</h3>
                    <button type="button" className="btn btn-light btn-lg btn-block">Confirmar</button>
                </div>
            </div>
            <div class="label_menu">
                <div className="menu_label_left">
                    <h3>Equipe 02</h3>
                    <button type="button" className="btn btn-light btn-lg btn-block">Confirmar</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default ViewConfirmGame;
