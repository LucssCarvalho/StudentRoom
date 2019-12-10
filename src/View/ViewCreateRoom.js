import React, { Component, useState } from 'react'
import '../Styles/ViewCreateRoom.css'
import axios from 'axios';
import viewmenu from '../View/ViewMenu'
import { object } from 'prop-types';

  class ViewCreateRoom extends Component {
    constructor(props) {
      super(props)

      this.state = {
        name :'',
        period : '',
      }
    }

    nextPath(path) {
      this.props.history.push(path);
    }

    changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
    }

    onAnswerChange(event) {
      this.setState({ selectedAnswer: event.currentTarget.value })
      console.log(event.currentTarget.value);
  }

    submitHandler = e => {
      e.preventDefault()
      axios.post(`https://tcc-unip.herokuapp.com/classrooms`, this.state)
      .then (response => {
        console.log(response)
        alert('Sala criada com sucesso')
      })
      .catch(error => {
        console.log(error)
      })
    }
    render(){
      const { name, period } = this.state
  return (
        <form className='container' onSubmit = {this.submitHandler}>
            <div className="label_name_question">Crie sua sala:</div>
            <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Nome e Período</span>
            </div>
            <input type="text" aria-label="name" id="name" className="form-control" name="name" value={name} onChange = {this.changeHandler}></input>
            <input type="text" aria-label="period" id="period" className="form-control" name="period" value={period} onChange = {this.changeHandler} ></input>
          </div>
          <input className="btn btn-primary btn-lg btn-block" type="submit" value="Enviar" ></input>
           <button className="btn btn-primary btn-lg btn-block"  onClick={() => this.nextPath ('/viewmenu')}>Voltar</button>
        </form>
    );
  }
}

export default ViewCreateRoom;
