import React, { Component, Fragment } from "react"

import { Slider } from "../../../script/settings"

import Pic1 from "../../../img/homeSlide/thumb1.jpg"
import Pic2 from "../../../img/homeSlide/thumb2.jpg"
import Pic3 from "../../../img/homeSlide/thumb3.jpg"
import Pic4 from "../../../img/homeSlide/thumb4.jpg"

export class Home extends Component{

    componentDidMount(){
        
        Slider()

    }

    render(){

        return(

            <Fragment>
                <section className="bodyHome">

                    <section className="slider">

                        <div className="arrow arrowRight">
                            <i className="fas fa-chevron-right"></i>
                        </div>

                        <div className="arrow arrowLeft">
                            <i className="fas fa-chevron-left"></i>
                        </div>
                        
                        <div className="moving">
                            <img src={Pic1} alt=""/>
                            <img src={Pic2} alt=""/>
                            <img src={Pic3} alt=""/>
                            <img src={Pic4} alt=""/>
                        </div>

                    </section>


                    <section className="secondRow">

                        <article className="healthyLife">
                            <h2>
                                Would you like to have a healthy life?
                            </h2>
                        </article>


                        <article className="healthyLifeInfo">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae sunt autem magnam molestias corporis ratione excepturi sed quo repellendus cupiditate amet voluptatibus, non a repellat id delectus placeat odit?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut atque, sed mollitia repellat corporis. Atque illum non nam quis reprehenderit nemo voluptatibus delectus, ullam porro eligendi modi temporibus pariatur?</p>
                        </article>


                    </section>

                </section>
            </Fragment>

        )

    }

}

export default (Home)