import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FizzBuzzView } from '../Views/FizzBuzzView'
import { HighScoreView } from '../Views/HighScoreView'
import { HomeView } from '../Views/HomeView'
import { SignInView } from '../Views/SignInView'


export const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/react-gh-pages/fizzbuzz" component={FizzBuzzView}/>
                <Route exact path="/react-gh-pages/signin" component={SignInView}/>
                <Route exact path="/react-gh-pages/highscore" component={HighScoreView}/>
                <Route component={HomeView}/>
            </Switch>
        </Router>
    )
}
