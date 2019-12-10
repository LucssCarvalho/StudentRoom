import React, { Component } from 'react'
import '../Styles/ViewLogin.css'
import teacher from '../images/teacher.png'
import axios from 'axios';

class ViewLogin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email :'',
      password : '',
    }
  }


  
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  nextPath(path) {
    this.props.history.push(path);
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault()
    axios.post(`https://tcc-unip.herokuapp.com/login`, this.state)
    .then (response => {
      if (response.data.success === false) {
        alert('Erro na autenticação')
        console.log(response)
      }else {
        alert('Autenticado com sucesso')
        localStorage.setItem('firebase_auth', this.state)
        this.props.history.push('/viewMenu');
        console.log(response)
      
      }
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    const { 
      email,
      password
      } = this.state

    return (
      <div className="Login" onSubmit = {this.submitHandler}>
        <header className="Login-header">
        </header>
        <div className="container">
          <form>
            <div className="label_login" >
            <img className="img-logo_teacher" src={teacher} alt=""></img>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Email e Senha</span>
                </div>
                <input type="email" placeholder="professor@teste.com.br"  name="email" value={email} onChange = {this.changeHandler}></input>
                <input type="password" placeholder="********"  name="password" value={password} className="form-control" onChange = {this.changeHandler}></input>
              </div>
              <input className="btn btn-success btn-lg btn-block" type="submit" value="Enviar" />
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.nextPath('/viewTypeLogin')}>Voltar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ViewLogin;
