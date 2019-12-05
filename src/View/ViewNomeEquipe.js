import React, { Component, useState } from 'react'
import '../Styles/ViewNomeEquipe.css'

class ViewNomeEquipe extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }
        
  render() {
    return (
        <form className='container'>
          <div className="divElement">
            <div className="label_name_pin">Insira o Nome da Equipe: </div>
              <div class="input-group mb-3">
                <input type="text" class="input_nome_equipe" aria-label="Sizing example input" name="inputNomeEquipe"/>
              </div>
              <input className="btn btn-primary btn-lg btn-block" type="submit" value="Enviar"/>
              <button className="btn btn-primary btn-lg btn-block" onClick={() => this.nextPath ('/viewpin')}>Voltar</button>
            </div>
        </form>
      );    
  }
}
export default ViewNomeEquipe;
