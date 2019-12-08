import React, { Component, useState } from 'react'
import '../Styles/ViewCreateQuestion.css'
import axios from 'axios';

class ViewCreateQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: [1, 2, 5, 4],
      correct_answer: 5,
      number: '1',
      question: '',
      theme: "Português"
    }
  }
  nextPath(path) {
    this.props.history.push(path);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }

  submitHandler = e => {
    e.preventDefault()
    console.log(this.state)
    axios.post(`https://tcc-unip.herokuapp.com/questions`, this.state)
      .then(response => {
        alert("Pergunta Salva com sucesso")
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // const submitForm = () => {
  //   const { answersTwo } = state


  //   var body = {
  //     options :myOptions,
  //     question: 'asdasdasd'
  //   }
  // }
  render() {
    const { question, answersOne, answersTwo, answersThree, answersFour } = this.state

    return (
      <form className='container' onSubmit={this.submitHandler}>
        <div className="label_name_question">Faça sua pergunta: </div>

        <textarea className="input_question" name="question" value={question} onChange={this.changeHandler}></textarea>

        <select class="btn btn-primary dropdown-toggle" name="cars">
          <option value="">Escolha um matéria</option>
          <option value="Língua Portuguesa">Língua Portuguesa</option>
          <option value="Matemática">Matemática</option>
          <option value="História">História</option>
          <option value="Geografia">Geografia</option>
          <option value="Ciências">Ciências</option>
          <option value="Artes">Artes</option>
          <option value="Inglês">Inglês</option>
        </select> 

        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio"></input>
            </div>
          </div>
          <input type="text" className="form-control" name="answersOne" value={answersOne} onChange={this.changeHandler}></input>
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" ></input>
            </div>
          </div>
          <input type="text" className="form-control" name="answersTwo" value={answersTwo} onChange={this.changeHandler}></input>
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio"></input>
            </div>
          </div>
          <input type="text" className="form-control" name="answersThree" value={answersThree} onChange={this.changeHandler}></input>
        </div>

        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="radio" aria-label="Radio button for following text input"></input>
            </div>
          </div>
          <input type="text" className="form-control" name="answersFour" value={answersFour} onChange={this.changeHandler} ></input>
        </div>

        <input className="btn btn-primary btn-lg btn-block" type="submit" value="Enviar" />
        <button className="btn btn-primary btn-lg btn-block" onClick={() => this.nextPath('/viewmenu')}>Voltar</button>
      </form>

    );
  }
}

export default ViewCreateQuestion;
