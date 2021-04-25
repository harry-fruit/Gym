import React, { Component, Fragment } from "react"
import {Switch, Route} from "react-router-dom"

import { Header } from "./header"

import { Home } from "./bodyComponents/home"
import { About } from "./bodyComponents/about"
import { Modalities } from "./bodyComponents/modalities"

export class App extends Component{

    render(){

        const App = () =>(
            <Fragment>

                <Header/>

                <Switch>

                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/home"} component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/modalities" component={Modalities}/>
                </Switch>

            </Fragment>
        )

        return(
            <Switch>
                <App/>
            </Switch>
        )

    }

}

export default(App)