import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"

import { Slider } from "../../../script/settings"
import { homeStyle } from "../../../script/style"

import Pic1 from "../../../img/homeSlide/thumb1.jpg"
import Pic2 from "../../../img/homeSlide/thumb2.jpg"
import Pic3 from "../../../img/homeSlide/thumb3.jpg"
import Pic4 from "../../../img/homeSlide/thumb4.jpg"

export class Home extends Component{

    componentDidMount(){
        
        Slider()
        homeStyle()

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
                                Would you like to have a <span>healthy life</span>?
                            </h2>
                        </article>


                        <article className="healthyLifeInfo">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae sunt autem magnam molestias corporis ratione excepturi sed quo repellendus cupiditate amet voluptatibus, non a repellat id delectus placeat odit?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut atque, sed mollitia repellat corporis. Atque illum non nam quis reprehenderit nemo voluptatibus delectus, ullam porro eligendi modi temporibus pariatur?</p>
                        </article>


                    </section>

                    <section className="thirdRow">
                        <div className="containerThird">

                            <h2>
                                There's a lot of gyms closest than you can imagine
                            </h2>
                            <Link to={"/about"}>See the closer gym from you</Link>

                        </div>
                    </section>

                    <section className="fourthRow">
                        <h2>
                            <span>Everything</span> you need is <span className="biggerWord">HERE</span>
                        </h2>
                        <div className="fourthContainer">
                            <div className="imagens">

                                <div className="img luta">
                                    <p>Boxing</p>
                                </div>
                                <div className="img musculacao">
                                    <p>Bodybuilding</p>
                                </div>
                                <div className="img crossfit">
                                    <p>Crossfit</p>
                                </div>

                            </div>

                        </div>
                    </section>

                </section>
            </Fragment>

        )

    }

}

export default (Home)