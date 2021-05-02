import React, { Component, Fragment } from "react"

import { slider } from "../../script/settings"

import Pic1 from "../../img/homeSlide/thumb1.jpg"
import Pic2 from "../../img/homeSlide/thumb2.jpg"
import Pic3 from "../../img/homeSlide/thumb3.jpg"
import Pic4 from "../../img/homeSlide/thumb4.jpg"

export class Home extends Component{

    componentDidMount(){
        
        slider()

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
                    <section>
                        
                    </section>

                </section>
            </Fragment>

        )

    }

}

export default (Home)