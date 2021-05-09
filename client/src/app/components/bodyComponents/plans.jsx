import React, { Component } from "react"

export class Plans extends Component{

    render(){
        return(

            <section className="bodyPlans">

               <div className="firstRow">
                   <h1>Plans</h1>
               </div>

               <section className="secondRow">

                    <section className="plan">
                        <div className="planHeader cinza">
                            <h2>Basic</h2>
                        </div>

                        <div className="planInfo">

                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>

                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>

                            <div className="planInfoRow">
                                <i class="fas fa-times"></i>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="planInfoRow">
                                <i class="fas fa-times"></i>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="planInfoRow">
                                <i class="fas fa-times"></i>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="planInfoRow">
                                <i class="fas fa-times"></i>
                                <p>Lorem Ipsum</p>
                            </div>


                        </div>

                            <button className="cinza">Buy</button>

                    </section>

                    <section className="plan">
                        <div className="planHeader lightBlack">
                            <h2>Recommended</h2>
                        </div>

                        <div className="planInfo">

                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>

                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>

                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="planInfoRow">
                                <i class="fas fa-times"></i>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="planInfoRow">
                                <i class="fas fa-times"></i>
                                <p>Lorem Ipsum</p>
                            </div>

                        </div>

                            <button className="lightBlack">Buy</button>
                    </section>

                    <section className="plan">
                        <div className="planHeader orange">
                            <h2>Pro</h2>
                        </div>

                        <div className="planInfo">

                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>

                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>

                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>
                            <div className="planInfoRow">
                                <i class="fas fa-check"></i>
                                <p>Lorem Ipsum</p>
                            </div>

                        </div>

                            <button className="orange">Buy</button>
                    </section>

               </section>

            </section>

        )
    }


}

export default (Plans)