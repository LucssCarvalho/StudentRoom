import React from 'react';
import PostData from '../data/posts.json'


class Question extends React.Component {
    render () {
        return (
        <div>
         {PostData.map((postDetail, index)=>{
          return <div>
          <div><h1>{postDetail.title_question}</h1></div>
          </div>})}
        </div>
        )
    }
}

export default Question;