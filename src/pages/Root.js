import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GetQuestions from '../View/GetQuestions'
import ViewCreateQuestion from '../View/ViewCreateQuestion'
import ViewMenu from '../View/ViewMenu'
import ViewLogin from '../View/ViewLogin'
import ViewQuestion from '../View/ViewQuestion'


export default () => (
    <Switch>
        <Route path='/ViewMenu' component={ViewMenu} />
        <Route path='/getquestions' component={GetQuestions} />
        <Route path='/viewcreatequestion' component={ViewCreateQuestion} />
        <Route path='/viewlogin' component={ViewLogin} />
        <Route path='/viewquestion' component={ViewQuestion} />
    </Switch>
)