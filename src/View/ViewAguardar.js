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

        <div aria-busy="true" aria-label="Loading" role="progressbar" class="container">

            </div>
</div>

      );
    
  }
}
export default ViewAguardar;
