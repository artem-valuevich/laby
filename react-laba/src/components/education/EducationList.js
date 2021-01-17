import React from "react"
import {useData} from "../../contexts/containerContext"
import EducationItem from "./EducationItem";

export default function Education() {
    const {education} = useData();
    return (
        <div id="edu" className="grid-item">
            <h1>Education</h1>
            <ul className="red-rectangle-list">
                {education.map((educationItem, key) => <EducationItem {...educationItem} key={key} />)}
            </ul>
        </div>
    )
}