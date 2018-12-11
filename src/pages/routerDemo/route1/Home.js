import React from 'react';
import { HashRouter as Router, Route, Link, HashRouter } from 'react-router-dom'

import Main from './Main'
import About from './About'
import Topic from './Topic'

export default class Home extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
                <hr />

                <Route exact path="/" component={Main} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topic} />
                </div>
            </HashRouter>
        )
    }
}