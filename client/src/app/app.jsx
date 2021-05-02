import React, { Component, Fragment } from "react"
import {Switch, Route} from "react-router-dom"

import { Header } from "./header"
import { Home } from "./bodyComponents/home"
import { About } from "./bodyComponents/about"
import { Modalities } from "./bodyComponents/modalities"
import { Plans } from "./bodyComponents/plans"
import { Aside } from "./aside"
import { Footer } from "./footer"

import { DocumentTitle, DocumentTitleOnLoad, showAside } from "../script/settings"


export class App extends Component{

    componentDidMount(){

        showAside()

        
        const navButtonNL = document.querySelectorAll("nav a") 
        const navButtons = Array.from(navButtonNL)
        
        navButtons.forEach(elem =>{

            elem.onclick = e =>{
                DocumentTitle()
            }
        })

        window.onload = e =>{
            DocumentTitleOnLoad()
        }
    }

    render(){

        const App = () =>(
            <Fragment>

                <div className={"mainContainer"}>

                    <Header/>
                    
                    <main>

                        <Switch>

                            <Route exact path={"/"} component={Home}/>
                            <Route exact path={"/home"} component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/modalities" component={Modalities}/>
                            <Route path="/plans" component={Plans}/>

                        </Switch>
    
                    </main>

                    <Footer/>

                </div>

                <div style={ {transform: "translateX(0px)"} } className={"sideContainer"}>
                    <Aside/>
                </div>
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