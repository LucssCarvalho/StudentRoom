import React, { Component } from 'react'
import '../Styles/GetQuestions.css';
import QuestionPreview from "../Components/QuestionPreview";
import axios from 'axios'

class GetQuestions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      themes:[],
      theme:'',
      questions:[]
    }
  }
  nextPath(path) {
    this.props.history.push(path);
  }

  componentDidMount(){
    axios.get(`https://tcc-unip.herokuapp.com/themes`)
    .then((res) => {
      this.setState({
        themes: res.data.themes
      })
  
    })
  }

  submitHandler = event => {
    event.preventDefault();
    const tema = {
      Theme: this.state.theme
    };

    axios.get(`hhttps://tcc-unip.herokuapp.com/questions`, {tema })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {

  return (
    <div className="container" onSubmit={this.submitHandler}>
      <header className="Login-header">
      </header>
      <div className="title_question">
        <h4>Lista de perguntas</h4>
        </div>
        <div className="list_questions">
        <form className="step">
        <select onChange={this.onThemeChange} className="btn btn-primary dropdown-toggle dropdown-toggle-split" name="theme">
          {this.state.themes.map(data =>
            <option type="text" className="form-control" name="theme" value={data.data.Theme} >{data.data.Theme}</option>)}
        </select>
        <button type="submit"className="btn btn-warning btn-lg btn-block" >Buscar</button>
        <ul>
          {this.state.questions.map(data =>
            <li>
              <div className="input-group">
                <div type="text" className="form-control">{data}</div>
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">Excluir</button>
                </div>
              </div>
            </li>
          )}
        </ul>
        </form>

        </div>
               <button className="btn btn-primary btn-lg btn-block" onClick={() => this.nextPath('/viewmenu')}>Voltar</button>
      </div>
    );
  }
}
export default GetQuestions;
