import React, { Component } from "react"
import { Link } from "react-router-dom"

export class Aside extends Component{

    render(){

        return(

            <aside>
                <div className={"closeAside"}>
                    <i className="fas fa-times"></i>
                </div>

                <nav>
                    <Link to="/home" >
                        Home
                    </Link>
                    <Link to="/about" >
                        About
                    </Link>
                    <Link to="/modalities" >
                        Modalities
                    </Link>
                </nav>

            </aside>

        )

    }

}

export default (Aside)