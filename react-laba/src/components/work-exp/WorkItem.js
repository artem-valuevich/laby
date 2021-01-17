import React from "react"

export default function WorkItem({date, place, job, description}) {
    return (
        <li>
            <div className="flex-container">
                <span className="red">{date}</span>
                <span className="red">{place}</span>
            </div>
            <b>{job}</b><br/>
            <span className="red">Accopmlishments</span><br/>{description}
         </li>
    )
}