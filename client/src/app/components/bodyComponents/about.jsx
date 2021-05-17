import React, { Component } from "react"

export class About extends Component{

    render(){

        return(
            <section className="bodyAbout">

                <section className="firstRow">
                    <h1>About Us</h1>
                    <article>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium similique mollitia odit quasi unde quia possimus exercitationem, distinctio praesentium totam perspiciatis voluptatibus nihil? Veniam autem odio nostrum hic impedit enim!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nostrum optio ad laborum facilis temporibus, atque laudantium, adipisci consequuntur saepe libero fuga quas nesciunt minus amet eveniet! Eius, laudantium sequi?</p>
                    </article>
                </section>

                <section className="secondRow">
                    <h2>Locales</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.048744584!2d-46.875489036252546!3d-23.681531483830113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1620604981680!5m2!1spt-BR!2sbr"style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                    <p>*This map is purely ilustrative*</p>
                </section>
            </section>
        )

    }

}

export default (About)