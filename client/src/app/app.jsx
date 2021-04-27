import React, { Component, Fragment } from "react"
import {Switch, Route} from "react-router-dom"

import { Header } from "./header"
import { Home } from "./bodyComponents/home"
import { About } from "./bodyComponents/about"
import { Modalities } from "./bodyComponents/modalities"
import { Aside } from "./aside"
import { Footer } from "./footer"

import { DocumentTitle, DocumentTitleOnLoad, showAside } from "../script/features"


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

                <Switch>

                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/home"} component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/modalities" component={Modalities}/>

                </Switch>

                <Footer/>

                </div>

                <div className={"sideContainer"}>
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