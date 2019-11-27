import React, { Component, useState } from 'react'
import '../Styles/ViewCreateQuestion.css'


  const ViewCreateQuestion = () => {

  return (
        <form className='container'>
            <div class="label_name_question">Faça sua pergunta: </div>
                <textarea class="input_question" aria-label="With textarea"></textarea>

                <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                       <input type="checkbox" aria-label="Checkbox for following text input"></input>
                     </div>
                  </div>
                      <input type="text" class="form-control" aria-label="Text input with checkbox"></input>
                  </div>

                  <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                       <input type="checkbox" aria-label="Checkbox for following text input"></input>
                     </div>
                  </div>
                      <input type="text" class="form-control" aria-label="Text input with checkbox"></input>
                  </div>

                  <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                       <input type="checkbox" aria-label="Checkbox for following text input"></input>
                     </div>
                  </div>
                      <input type="text" class="form-control" aria-label="Text input with checkbox"></input>
                  </div>

                  <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                       <input type="checkbox"></input>
                     </div>
                  </div>
                      <input type="text" class="form-control"></input>
                  </div>
           <input class="btn btn-primary" type="submit" value="Enviar" />
        </form>
    );
  }

export default ViewCreateQuestion;
