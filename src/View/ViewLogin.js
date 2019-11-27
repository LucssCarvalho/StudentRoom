import React, { Component } from 'react'
import '../Styles/ViewLogin.css'

class ViewLogin extends Component {
  render() {
    return (
      <div className="Login">
        <header className="Login-header">
        </header>
        <div className="container">
          <form>
            <div><h1 className="logo_login">LOGO</h1></div>
            <div class="form-group row">
              <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
              <div class="col-sm-10">
                <input type="text" readonly class="form-control" id="staticEmail" placeholder="email@example.com"></input>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password"></input>
              </div>
            </div>
            <input class="btn btn-success" type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    );
  }
}
export default ViewLogin;
