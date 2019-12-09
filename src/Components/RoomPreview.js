import React from 'react';
import axios from 'axios';
import '../Styles/roompreview.css'

class RoomPreview extends React.Component {
  state={
    questions:[]
  };

  componentDidMount(){
    axios.get(`https://tcc-unip.herokuapp.com/classrooms`)
    .then((res) => {
      console.log(res.data.data.name);
      this.setState({
        questions: res.data.data,
      })
    })
  }

render(){
    return(
    <div className="container">
      <ul className="style-list">
        {this.state.questions.map(data =>
        <li className="style-list">
          <div type="text"  className="input-room"  aria-label="Recipient's username"  aria-describedby="basic-addon2"> {data.data.name} / {data.data.period}
          <div className="Id-room">{data.id}</div>
          </div>
          <div className="input-group-append">
       </div>

         </li>
        )}
      </ul>
    </div>
         );
     }
}
export default RoomPreview;