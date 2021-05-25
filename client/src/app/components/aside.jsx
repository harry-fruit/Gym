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
                            <p>Home</p>
                        </Link>

                        <Link to="/about" >
                            <p>About</p>
                        </Link>

                        <Link to="/plans" >
                            <p>Plans</p>
                        </Link>

                        <Link to="/modalities" >
                            <p>Modalities</p>
                        </Link>

                    </nav>
                    
                </section>

            </aside>

        )

    }

}

export default (Aside)