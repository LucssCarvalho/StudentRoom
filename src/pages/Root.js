import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GetQuestions from '../View/GetQuestions'
import ViewCreateQuestion from '../View/ViewCreateQuestion'
import ViewMenu from '../View/ViewMenu'


export default () => (
    <Switch>
        <Route path='' component={ViewMenu} />
        <Route path='/getquestions' component={GetQuestions} />
        <Route path='/viewcreatequestion' component={ViewCreateQuestion} />
    </Switch>
)