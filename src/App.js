import React, { Component } from 'react'
import { HashRouter } from 'react-router-dom'
import Root from './pages/Root.js'

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Root />
            </HashRouter>
        )
    }
}
export default App