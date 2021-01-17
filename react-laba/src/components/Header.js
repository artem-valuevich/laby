import React from "react"
import title from "../img/title.jpg"
import { useData } from "../contexts/headerContext";


export default function Header() {
    const {phone, email, place, user, status } = useData()
    return (
        <div className="header">

            <div className="flex-container">
                <div className="rectangle" />
                <div>
                    <h1>{user}</h1>
                    <p> 
                        {status}
                    </p>
                </div>
            </div>

            <div className="avatar-wrapper">
                <img className="avatar" src={title} alt="avatar"/>
            </div>

            <div className="right-text">
                <h1>Contacts</h1>
                <ul>
                    <li> {email} <i className="material-icons red">email</i></li>
                    <li> {phone} <i className="material-icons red">phone</i></li>
                    <li> {place} <i className="material-icons red">place</i></li>
                </ul>
            </div>

        </div>

    )
}