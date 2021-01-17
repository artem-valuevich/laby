import React from "react"
import title from "../img/title.jpg"


export default function Header() {
    return (
        <div className="header">

            <div className="flex-container">
                <div className="rectangle" />
                <div>
                    <h1>Artem</h1>
                    <p> 
                        You can also check <br />the mobile version<br /> of this site
                    </p>
                </div>
            </div>

            <div className="avatar-wrapper">
                <img className="avatar" src={title} alt="avatar"/>
            </div>

            <div className="right-text">
                <ul>
                    <li>artem@mail.ru <i className="material-icons red">email</i></li>
                    <li>+375 33 123-98-76 <i className="material-icons red">phone</i></li>
                    <li>Minsk, Belarus <i className="material-icons red">place</i></li>
                </ul>
            </div>

        </div>

    )
}