import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

export class Header extends Component{

    render(){
        return(

            <Fragment>

                <Link to="/home" >
                    Home
                </Link>
                <Link to="/about" >
                    About
                </Link>
                <Link to="/modalities" >
                    Modalities
                </Link>

            </Fragment>
        )
    }

} 

export default (Header)