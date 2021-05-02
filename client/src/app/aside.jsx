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
                            Home
                        </Link>

                        <Link to="/about" >
                            <i className="far fa-address-card"></i>
                            <p>About</p>
                        </Link>

                        <Link to="/plans" >
                            <i class="fas fa-medal"></i>
                            Plans
                        </Link>

                        <Link to="/modalities" >
                            <i class="fas fa-swimmer"></i>
                            Modalities
                        </Link>

                    </nav>
                    
                </section>

            </aside>

        )

    }

}

export default (Aside)