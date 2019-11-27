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
              <button type="button" class="btn btn-primary">A</button>
              <button type="button" class="btn btn-primary">B</button>
              <button type="button" class="btn btn-primary">C</button>
              <button type="button" class="btn btn-primary">D</button>
             </div>
          </div>
          </div>
      </div>
  );
}
export default ViewQuestion;
