import React, { Component, useState } from 'react'
import '../Styles/ViewAguardar.css'

class ViewAguardar extends Component {

  nextPath(path) {
    this.props.history.push(path);
  }

    render (){
      return (
<h1>
  <span>A</span>
  <span>G</span>
  <span>U</span>
  <span>A</span>
  <span>R</span>
  <span>D</span>
  <span>A</span>
  <span>N</span>
  <span>D</span>
  <span>O</span>
  <br></br>
  <span>R</span>
  <span>E</span>
  <span>S</span>
  <span>P</span>
  <span>O</span>
  <span>S</span>
  <span>T</span>
  <span>A</span>
</h1>
      );
    
  }
}
export default ViewAguardar;
