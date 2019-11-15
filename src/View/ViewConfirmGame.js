import React, { Component } from 'react'
import '../Styles/ViewConfirmGame.css'

class ViewConfirmGame extends Component {
  render() {
  return (
    <div className="ViewConfirmGame">
      <header className="ViewConfirmGame-header">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossorigin="anonymous"> 
        </link>
      </header>
      <div className="container">
        <div className="title_question"><h1>Vamos jogar</h1></div>
            <div class="label_menu">
                <div className="menu_label_right">
                    <h3>Equipe 01</h3>
                    <button type="button" class="btn btn-light">Confirmar</button>
                </div>
                <div className="menu_label_left">
                    <h3>Equipe 02</h3>
                    <button type="button" class="btn btn-light">Confirmar</button>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
export default ViewConfirmGame;
