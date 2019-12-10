import React, { Component } from 'react'
import '../Styles/ViewLogin.css'
import teacher from '../images/teacher.png'
class ViewLogin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      login :'',
      password : '',
    }
  }

  // nextPath(path) {
  //   this.props.history.push(path);
  // }

  // changeHandler = (e) => {
  //   this.setState({[e.target.name]: e.target.value})
  // }

  // submitHandler = e => {
  //   e.preventDefault()
  //   axios.post(`https://tcc-unip.herokuapp.com/classrooms`, this.state)
  //   .then (response => {
  //     console.log(response)
  //     alert('Sala criada com sucesso')
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  render() {
    return (
      <div className="Login">
        <header className="Login-header">
        </header>
        <div className="container">
          {/* <form>
            <div className="label_login" >
            <img className="img-logo_teacher" src={teacher} alt=""></img>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Login e Senha</span>
                </div>
                <input type="text" placeholder="professor@teste.com.br"  name="login" value={login} class="form-control" onChange = {this.changeHandler}></input>
                <input type="password" placeholder="********"  name="password" value={password} class="form-control" onChange = {this.changeHandler}> </input>
              </div>
              <input className="btn btn-success btn-lg btn-block" type="submit" value="Enviar" />
              <button type="button" className="btn btn-primary btn-lg btn-block" onClick={() => this.nextPath('/viewTypeLogin')}>Voltar</button>
            </div>
          </form> */}
        </div>
      </div>
    );
  }
}
export default ViewLogin;
