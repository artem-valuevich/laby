import React from "react"
import Works from "./work-exp/WorkList.js"
import Skills from "./skills/SkillsList"
import Achievments from "./achievments/AchievmentsList"
import Education from "./education/EducationList"
import { useData } from "../context.js"

export default function Container() {
    const {languages, interests} = useData();
    return (
        <div className="container">
            <Works />
            <Skills />
            <Achievments />
            <Education />
            <div>
                <h1>Languages</h1>
                {languages.join(', ')}
            </div>

            <div>
                <h1>Interests</h1>
                {interests.join(' | ')}
            </div>
        </div>
    )
}