import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FizzBuzzView } from '../Views/FizzBuzzView'
import { HomeView } from '../Views/HomeView'
import { SignInView } from '../Views/SignInView'


export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path="/react-gh-pages/fizzbuzz" component={FizzBuzzView}/>
                <Route exact path="/react-gh-pages/signin" component={SignInView}/>
                <Route component={HomeView}/>
            </Switch>
        </Router>
    )
}
