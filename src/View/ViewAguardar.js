import React, { Component, useState } from 'react'
import '../Styles/ViewAguardar.css'

class ViewAguardar extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

    render (){
      return(
      <div className="text">

        <h1 >Aguardando resposta da outra equipe...</h1>
        
        <div className="divAguardar">
        <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>

      </div>

      );
    
  }
}
export default ViewAguardar;
