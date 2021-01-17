import React from "react"
import { useData } from "../../contexts/containerContext"
import SkillsItem from "./SkillsItem"

export default function Skills() {
    const {skills} = useData();

    return (
        <div className="grid-item">
            <h1>Skills</h1>

            <ul>
                {skills.map((skill, key) => <SkillsItem {...skill} key={key}/>)}
            </ul>
        </div>
        
    )
}