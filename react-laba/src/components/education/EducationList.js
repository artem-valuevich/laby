import React from "react"
import {useData} from "../../context"
import EducationItem from "./EducationItem";

export default function Education() {
    const {education} = useData();
    return (
        <div id="edu">
            <h1>Education</h1>
            <ul class="red-rectangle-list">
                {education.map((educationItem, key) => <EducationItem {...educationItem} key={key} />)}
            </ul>
        </div>
    )
}