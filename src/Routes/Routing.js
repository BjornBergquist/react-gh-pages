import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FizzBuzzView } from '../Views/FizzBuzzView'
import { HomeView } from '../Views/HomeView'


export const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/react-gh-pages/fizzbuzz" component={FizzBuzzView}/>
                <Route component={HomeView}/>
            </Switch>
        </Router>
    )
}
