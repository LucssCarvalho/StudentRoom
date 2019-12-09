import React, { Component, useState } from 'react'
import '../Styles/ViewCreateQuestion.css'
import axios from 'axios';

class ViewCreateQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answers:  [],
      correct_answer: '',
      number: '1',
      question: '',
      themes: [],
      theme:''
    }
  }
  nextPath(path) {
    this.props.history.push(path);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount(){
    axios.get(`https://tcc-unip.herokuapp.com/themes`)
    .then((res) => {
      this.setState({
        themes: res.data.themes
      })
    })
  }

  submitHandler = e => {
    e.preventDefault()
    const bodyQuestions = {
      "answers": this.state.answers,
      "correct_answer": this.state.correct_answer,
      "number": this.state.number,
      "question": this.state.question,
      "theme": this.state.theme
      }
    axios.post(`https://tcc-unip.herokuapp.com/questions`,JSON.stringify(bodyQuestions))
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

  render() {
    const { 
      question, 
      answersOne, 
      answersTwo, 
      answersThree, 
      answersFour,
      themes } = this.state

    return (
      <form className='container' onSubmit={this.submitHandler}>
        <div className="label_name_question">Faça sua pergunta: </div>

        <textarea className="input_question" name="question" value={question} onChange={this.changeHandler}></textarea>

       <select className="btn btn-primary dropdown-toggle dropdown-toggle-split"  name="theme" value="theme">
     
        {this.state.themes.map(data =>
        <option type="text"  className="form-control" name="theme" value="theme" >{data.data.Theme} </option>
        )}
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
