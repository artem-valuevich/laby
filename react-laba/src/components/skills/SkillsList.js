import React from "react"
import { useData } from "../../context"
import SkillsItem from "./SkillsItem"

export default function Skills() {
    const {skills} = useData();

    return (
        <div>
            <h1>Skills</h1>

            <ul>
                {skills.map((skill, key) => <SkillsItem {...skill} key={key}/>)}
            </ul>
        </div>
        
    )
}