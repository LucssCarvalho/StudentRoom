import React, { Component } from 'react'
import '../Styles/ViewCreateQuestion.css'


  class ViewCreateQuestion extends Component {
  render() {

  return (
    <div className="ViewCreateQuestion">
      <header className="ViewCreateQuestion-header">

      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossorigin="anonymous"> 
        </link>

      </header>
        <div className="container">
        <form>
            <div class="label_name_question">Faça sua pergunta:
                 <input type="text" name="name" class="input_question"/>
            </div>

            <div class="label_resp">
              <div class="label_btn">
              <div class="btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary active">
                  <input type="checkbox" checked autocomplete="off"> Checked</input>
                 </label>
                </div>
                <input type="text" name="name" class="btn btn-info"></input>
                <input type="text" name="name" class="btn btn-info"></input>
                <input type="text" name="name" class="btn btn-info"></input>
                <input type="text" name="name" class="btn btn-info"></input>
                <input type="text" name="name" class="btn btn-info"></input>
             </div>
           </div>
           <input class="btn btn-success" type="submit" value="Enviar" />
        </form>
        </div>
      </div>
    );
  }
}
export default ViewCreateQuestion;
