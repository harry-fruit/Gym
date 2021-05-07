import React, { Component, Fragment } from "react"

import { Header } from "./components/header"
import { Body} from "./components/body"
import { Aside } from "./components/aside"
import { Footer } from "./components/footer"

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

        return(
            <Fragment>

                <section className={"mainContainer"}>
                    <Header/>
                    <Body/>
                    <Footer/>
                </section>

                <section style={ {transform: "translateX(0px)"} } className={"sideContainer"}>
                    <Aside/>
                </section>

            </Fragment>
        )

    }

}

export default(App)