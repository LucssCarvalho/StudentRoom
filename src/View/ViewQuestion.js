import React from 'react';
import '../Styles/ViewQuestion.css'
import Clock from "../Components/Clock";
import Question from "../Components/Question";

function ViewQuestion() {

  function ClockExecute() {}
  return (
    <div className="ViewQuestion">
      <header className="Question-header">
      </header>
      <div className="container">
        <div><Clock testeFuncao={ClockExecute}/>
      </div>
          <div class="label_title"> 
            <Question/>
          </div>
          <div class="label_resp">
             <div class="label_btn">
              <button type="button" className="btn btn-primary btn-lg btn-block">A</button>
              <button type="button" className="btn btn-primary btn-lg btn-block">B</button>
              <button type="button" className="btn btn-primary btn-lg btn-block">C</button>
              <button type="button" className="btn btn-primary btn-lg btn-block">D</button>
             </div>
          </div>
          </div>
      </div>
  );
}
export default ViewQuestion;
