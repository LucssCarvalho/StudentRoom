import React from 'react';
import axios from 'axios';

class QuestionPreview extends React.Component {
  state = {
    questions: [],
    theme: '',
    themes:[]
  };

  onThemeChange(event) {
    this.setState({ theme: event.currentTarget.value })
    console.log(event.currentTarget.value);
}

  getQuestion() {
    axios.get(`https://tcc-unip.herokuapp.com/questions`,this.state)
      .then((res) => {
        console.log(res);
        this.setState({
          questions: res
        })
      })
  }

  render() {
    const {
      themes } = this.state
    
    return (
      <div className='step'>
        <ul>
          {this.state.questions.map(data =>
            <li>
              <div className="input-group">
                <div type="text" className="form-control"> {data}</div>
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