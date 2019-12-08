import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GetQuestions from '../View/GetQuestions'
import ViewCreateQuestion from '../View/ViewCreateQuestion'
import ViewMenu from '../View/ViewMenu'
import ViewLogin from '../View/ViewLogin'
import ViewQuestion from '../View/ViewQuestion'
import ViewCreateRoom from '../View/ViewCreateRoom'
import ViewGame from '../View/ViewGame'
import ViewTypeLogin from '../View/ViewTypeLogin'


export default () => (

    <Switch>
        <Route path='/viewmenu' component={ViewMenu} />
        <Route path='/getquestions' component={GetQuestions} />
        <Route path='/viewcreatequestion' component={ViewCreateQuestion} />
        <Route path='/viewcreateroom' component={ViewCreateRoom} />
        <Route path='/viewlogin' component={ViewLogin} />
        <Route path='/viewquestion' component={ViewQuestion}/>
        <Route path='/viewGame' component={ViewGame} />
        <Route path='/viewtypelogin' component={ViewTypeLogin}/>
    </Switch>
)