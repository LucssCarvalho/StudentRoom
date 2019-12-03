import React from 'react';

class QuestionPreview extends React.Component {
render(){
    return(
    <div class="container">
        <div class="input-group">
          <div type="text" class="form-control" 
            aria-label="Recipient's username" 
            aria-describedby="basic-addon2">Question Title</div>
          <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Excluir</button>
       </div>
      </div>
    </div>
         );
     }
}
export default QuestionPreview;