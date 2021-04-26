import React, { Component } from "react"

export class Footer extends Component{

    render(){

        return(
            <footer>
                <p>&copy; Isaque Duarte, 2021.</p>
                <div className="socialIcons">

                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-github-square"></i>

                </div>
            </footer>
        )
    
    }

}

export default (Footer)