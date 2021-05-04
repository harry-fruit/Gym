import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

import { Home } from "./bodyComponents/home"
import { About } from "./bodyComponents/about"
import { Modalities } from "./bodyComponents/modalities"
import { Plans } from "./bodyComponents/plans"

export class Body extends Component{

    render(){

        const App = () =>(

            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/home"} component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/modalities" component={Modalities}/>
                <Route path="/plans" component={Plans}/>
            </Switch>

        )

        return(
            <main>
                <Switch>
                    <App/>
                </Switch>
            </main>
        )

    }

}
