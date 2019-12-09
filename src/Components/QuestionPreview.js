import React from 'react';
import axios from 'axios';

class QuestionPreview extends React.Component {
  state={
    classroom:[]
  };


  // deleteQuestion = (questions) =>{
  // axios.delete(`https://tcc-unip.herokuapp.com/questions/${questionId}`)
  // }
  // axios.delete(`https://tcc-unip.herokuapp.com/questions/${questionId}`)


  componentDidMount(){
    axios.get(`https://tcc-unip.herokuapp.com/questions`)
    .then((res) => {
      console.log(res.data.data.id);
      this.setState({
        questions: res.data.data
      })
    })
  }

render(){
    return(
    <div className="container">
      <ul>
        {this.state.classroom.map(data =>
        <li>
        <div className="input-group">
          <div type="text"  className="form-control"  aria-label="Recipient's username"  aria-describedby="basic-addon2"> {data.data.data.id}</div>
          <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Excluir</button>
       </div>
      </div>
         </li>
        )}
      </ul>
    </div>
         );
     }
}
export default QuestionPreview;