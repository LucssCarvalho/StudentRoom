import React from 'react';
import '../Styles/ViewQuestion.css'
import Clock from "../Components/Clock";
import Question from "../Components/Question";

function ViewQuestion() {

  function ClockExecute() 
  {
  }
  return (
    <div className="ViewQuestion">
      <header className="Question-header">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
            crossorigin="anonymous"> 
      </link>
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
