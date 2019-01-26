import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css'
import Search from './views/Search/Search'
import Main from "./views/Main/Main"

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Main}/>
                    <Route path="/search/" component={Search}/>
                </div>
            </Router>
        )
    }
}


export default AppRouter;
