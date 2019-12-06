import React, { Component, useState } from 'react'
import '../Styles/ViewPin.css'

class ViewPin extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

    render (){
      return (
//        <form className='container' >
          <div className="divElement">
            <div className="label_name_pin">Insira o Pin: </div>
              <div class="input-group mb-3">
                <input type="text" class="input_pin" name="inputPin"/>
              </div>
              <input className="btn btn-primary btn-lg btn-block" type="submit" value="Enviar" onClick={() => this.nextPath ('/viewnomeequipe')}/>
              <button className="btn btn-primary btn-lg btn-block" onClick={() => this.nextPath ('/viewmenu')}>Voltar</button>
          </div>
//        </form>
      );
    
  }
}
export default ViewPin;
