import React from "react"

export default function EducationItem({date, place, specialty}) {
    return (
        <li>
            <p className="red">{date}</p>
            <b>{place}</b><br/>{specialty}
        </li>
    )
}