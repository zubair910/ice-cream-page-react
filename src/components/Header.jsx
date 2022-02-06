import React from "react"
import Logo from "../images/logo1.png"
import "./header.css"


const Header = () => {
    return (
        <section className="headerBox">
            <div className="logo">
                <img src={Logo} width="150"  />
            </div>
            <div className="navlinks">
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>FEEDBACK</li>
                </ul>
            </div>
        </section>
    )
}

export default Header