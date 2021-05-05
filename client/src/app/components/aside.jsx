import React, { Component } from "react"
import { Link } from "react-router-dom"

export class Aside extends Component{

    render(){

        return(

            <aside>
                <div className={"closeAside firstRow"}>
                    <i className="fas fa-times"></i>
                </div>
                
                <section className="secondRow">
                    
                    <div className={"logo"}>
                        <h1>Gym</h1> 
                        <i className="fas fa-dumbbell"></i>
                    </div>

                    <nav>

                        <Link to="/home" >
                            <i className="fas fa-home"></i>
                            <p>Home</p>
                        </Link>

                        <Link to="/about" >
                            <i className="far fa-address-card"></i>
                            <p>About</p>
                        </Link>

                        <Link to="/plans" >
                            <i className="fas fa-medal"></i>
                            <p>Plans</p>
                        </Link>

                        <Link to="/modalities" >
                            <i className="fas fa-swimmer"></i>
                            <p>Modalities</p>
                        </Link>

                    </nav>
                    
                </section>

            </aside>

        )

    }

}

export default (Aside)