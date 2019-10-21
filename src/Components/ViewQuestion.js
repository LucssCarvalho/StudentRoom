import React from 'react';
import '../Styles/ViewQuestion.css'
import Clock from "./Clock";
import Question from "./Question";


function ViewQuestion() {

  function ClockExecute() 
  {
   
  }
  return (
    <div className="ViewQuestion">
      <header className="Question-header">
      </header>
        <div><Clock testeFuncao={ClockExecute}/>
      </div>
          <div class="label_title"> 
            <Question/>
          </div>
          <div class="label_resp">
             <div class="label_btn">
                <button class="btn">A</button>
                <button class="btn">A</button>
                <button class="btn">A</button>
                <button class="btn">A</button>
               </div>
           </div>
      </div>
  );
}
export default ViewQuestion;
