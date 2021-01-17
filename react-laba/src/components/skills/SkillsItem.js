import React from "react"

export default function SkillsItem({skillName, progressStatus}) {
    return (
        <li>
            <div className="flex-container">
                {skillName} <progress value={progressStatus} max="100"></progress>
            </div>
        </li>
    )
}