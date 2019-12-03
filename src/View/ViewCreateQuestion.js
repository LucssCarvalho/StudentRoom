import React, { Component, useState } from 'react'
import '../Styles/ViewCreateQuestion.css'

  const ViewCreateQuestion = (props) => {

    const nextPath = (path) => {
      props.history.push(path);
    }

    // const submitForm = () => {
    //   const { answersTwo } = state

      
    //   var myOptions = [answersTwo, answersTwo, answersTwo, answersTwo]

    //   var body = {
    //     options :myOptions,
    //     question: 'asdasdasd'
    //   }
    // }

  return (
        <form className='container' onSubmit={props.getUser}>
            <div className="label_name_question">Faça sua pergunta: </div>

              <textarea className="input_question"  name="titleQuestion" 
              aria-label="With textarea"></textarea>

              <div className="input-group">
              <div className="input-group-prepend">
              <div className="input-group-text">
              <input type="radio" aria-label="Radio button for following text input"></input>
              </div>
             </div>
             <input type="text" className="form-control" name="answersOne"></input>
            </div>

            <div className="input-group">
              <div className="input-group-prepend">
              <div className="input-group-text">
              <input type="radio" aria-label="Radio button for following text input"></input>
              </div>
             </div>
             <input type="text" className="form-control" name="answersTwo"></input>
            </div>

            <div className="input-group">
              <div className="input-group-prepend">
              <div className="input-group-text">
              <input type="radio" aria-label="Radio button for following text input"></input>
              </div>
             </div>
             <input type="text" className="form-control" name="answersThree"
             aria-label="Text input with radio button"></input>
            </div>

            <div className="input-group">
              <div className="input-group-prepend">
              <div className="input-group-text">
              <input type="radio" aria-label="Radio button for following text input"></input>
              </div>
             </div>
             <input type="text" className="form-control" name="answersFour"
             aria-label="Text input with radio button"></input>
            </div>
                                    
           <input className="btn btn-primary btn-lg btn-block" type="submit" value="Enviar"/>
           <button className="btn btn-primary btn-lg btn-block" onClick={() => nextPath ('/viewmenu')}>Voltar</button>
        </form>
    );
  }

export default ViewCreateQuestion;
