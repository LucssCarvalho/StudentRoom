import React, { Component, useState } from 'react'
import '../Styles/ViewResultado.css'

class ViewResultado extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

    render (){
      return (
          <div className="divElement">
            <div className="label_name_pin">Resultado: </div>
              <div class="input-group mb-3">
              <div class="divTable">
              <div class="divTable">
              <div class="divTableBody">
              <div class="divTableRow">
              <div class="divTableCell">Equipe 1</div>
              <div class="divTableCell">&nbsp;Equipe 2</div>
              </div>
              <div class="divTableRow">
              <div class="divTableCell">&nbsp;Puntu&ccedil;&atilde;o:</div>
              <div class="divTableCell">&nbsp;Pontua&ccedil;&atilde;o:</div>
              </div>
              </div>
              </div>
              </div>

              
              <br></br>
              
          </div>
          <button className="btn btn-primary btn-lg btn-block" onClick={() => this.nextPath ('/viewmenu')}>Voltar</button>

          </div>
          
      );
    
  }
}
export default ViewResultado;
