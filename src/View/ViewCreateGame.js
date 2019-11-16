import React, { Component } from 'react'
import '../Styles/ViewCreateGame.css'

class ViewCreateGame extends Component {
  render() {
  return (
    <div className="ViewCreateGame">
      <header className="ViewConfirmGame-header">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossorigin="anonymous"> 
        </link>
      </header>
      <div className="container label_menu">
            <h5 class="card-title">JOGO 1 - TECNOLOGIA</h5>
                <div class="row">
                    <div class="col-sm">Equipe 1
                    </div>
                        <div class="col-sm">Equipe 2
                        </div>
            </div>
            <div class="row">
                <div class="col-sm">PIN</div>
                    <div class="col-sm">PIN</div> 
            </div>
            <div class="row">
                <div class="col-sm">
                <div class="card-header">59238</div>
                </div>
                <div class="col-sm">
                <div class="card-header">59238</div>
                </div>
            </div>
            <div class="row">
            <div class="col-sm">Equipe</div>
            <div class="col-sm">Status</div>
            <div class="col-sm">Opções</div>
            </div>
            <div class="row">
            <div class="col-sm">Equipe 1</div>
            <div class="col-sm">Logado</div>
            <div class="col-sm">Deslogado</div>
            </div>
            <div class="row">
            <div class="col-sm">Equipe 2</div>
            <div class="col-sm">Deslogado</div>
            <div class="col-sm">Deslogado</div>
            </div>
            <button type="button" class="btn btn-success">Success</button>
        </div>
        
      </div>
    );
  }
}
export default ViewCreateGame;
