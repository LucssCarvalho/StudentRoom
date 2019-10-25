import React, { Component } from 'react'
import '../Styles/ViewCreateQuestion.css'


  class ViewCreateQuestion extends Component {
  render() {

  return (
    <div className="ViewCreateQuestion">
      <header className="ViewCreateQuestion-header">
      </header>
        <div>
        <form>
            <label class="label_name_question">Faça sua pergunta:
                 <input type="text" name="name" class="input_question"/>
            </label>
            <div class="label_resp">
             <div class="label_btn">
             <input type="text" name="name" class="btn"/>
             <input type="text" name="name" class="btn"/>
             <input type="text" name="name" class="btn"/>
             <input type="text" name="name" class="btn"/>
             </div>
           </div>
           <input class="btn_success" type="submit" value="Enviar" />
        </form>
        </div>
      </div>
    );
  }
}
export default ViewCreateQuestion;
