import React, { Component } from "react"

import bodybuilding from "../../../img/modalitiesPic/bodybuilding.jpg"
import boxing from "../../../img/modalitiesPic/boxing.jpg"
import crossfit from "../../../img/modalitiesPic/crossfit.jpg"
import nutrition from "../../../img/modalitiesPic/nutrition.jpg"

export class Modalities extends Component{

    render(){

        return(
            <section className="bodyModalities">
                <section className="firstRow">
                    <h1>Modalities</h1>

                    <section className="modalities">

                        <figure className="modality">
                            <img src={bodybuilding} alt="bodybuilding" />
                            <div className="info">
                                <figcaption>Bodybuilding</figcaption>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi recusandae consectetur cupiditate tempore fugit aut quidem quia ipsam non commodi, adipisci, veritatis explicabo reprehenderit, repellendus asperiores exercitationem fugiat! Quos, corrupti.</p>

                            </div>
                        </figure>

                        <figure className="modality">
                            <img src={boxing} alt="boxing" />
                            <div className="info">
                                <figcaption>Boxing</figcaption>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et magni nostrum aspernatur voluptatibus nesciunt similique facere, velit iure expedita voluptate, eaque earum iste veritatis maxime id eligendi cumque. Nam.</p>
                            </div>
                        </figure>

                        <figure className="modality">
                            <img src={crossfit} alt="crossfit" />
                            <div className="info">
                                <figcaption>Crossfit</figcaption>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sequi consectetur cum recusandae magnam repellendus similique sint asperiores iusto incidunt delectus provident adipisci dolorem laudantium iste, quos quasi error odit.</p>
                            </div>
                        </figure>

                        <figure className="modality">
                            <img src={nutrition} alt="crossfit" />
                            <div className="info">
                                <figcaption>Nutritional Education</figcaption>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sequi consectetur cum recusandae magnam repellendus similique sint asperiores iusto incidunt delectus provident adipisci dolorem laudantium iste, quos quasi error odit.</p>
                            </div>
                        </figure>

                    </section>

                </section>
            </section>
        )

    }

}

export default (Modalities)