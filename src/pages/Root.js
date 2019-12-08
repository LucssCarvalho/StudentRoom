import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GetQuestions from '../View/GetQuestions'
import ViewCreateQuestion from '../View/ViewCreateQuestion'
import ViewMenu from '../View/ViewMenu'
import ViewLogin from '../View/ViewLogin'
import ViewQuestion from '../View/ViewQuestion'
import ViewConfirmGame from '../View/ViewConfirmGame'
import ViewCreateGame from '../View/ViewCreateGame'
import ViewCreateRoom from '../View/ViewCreateRoom'
import ViewGame from '../View/ViewGame'
import ViewGamesReports from '../View/ViewGamesReports';
import ViewGamesDetail from '../View/ViewGameDetail';

export default () => (

    <Switch>
        <Route path='/viewmenu' component={ViewMenu} />
        <Route path='/getquestions' component={GetQuestions} />
        <Route path='/viewcreatequestion' component={ViewCreateQuestion} />
        <Route path='/viewcreateroom' component={ViewCreateRoom} />
        <Route path='/viewlogin' component={ViewLogin} />
        <Route path='/viewquestion' component={ViewQuestion}/>
        <Route path='/ViewcreateGame' component={ViewCreateGame} />
        <Route path='/Viewconfirmgame' component={ViewConfirmGame} />
        <Route path='/viewGame' component={ViewGame} />
        <Route path='/viewGamesReports' component={ViewGamesReports} />
        <Route path='/viewGamesDetail' component={ViewGamesDetail} />
    </Switch>
)