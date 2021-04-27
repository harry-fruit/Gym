import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

export class Header extends Component{

    render(){
        return(

            <header>

                <Link to={"/home"}>
                    <div className={"logo"}>
                        <h1>Gym</h1> 
                        <i className="fas fa-dumbbell"></i>
                    </div>
                </Link>

                <div className={"aside"}>
                    <i className="fas fa-bars"></i>
                </div>
            </header>
        )
    }

} 

export default (Header)