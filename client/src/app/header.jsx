import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

export class Header extends Component{

    render(){
        return(

            <header>

                <div className={"logo"}>
                    <h1>Gym</h1> 
                    <i class="fas fa-dumbbell"></i>
                </div>

                <div className={"aside"}>
                    <i class="fas fa-bars"></i>
                </div>
            </header>
        )
    }

} 

export default (Header)