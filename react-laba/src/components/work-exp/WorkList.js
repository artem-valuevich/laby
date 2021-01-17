import React from "react"
import {useData} from "../../contexts/containerContext"
import WorkItem from "./WorkItem"

export default function Works() {
    const {works} = useData();
    return (
        <div id="work-exp" className="grid-item">
            <h1>Work expirience</h1>
            <ul className="red-rectangle-list">
                {works.map((work, key) => <WorkItem {...work} key={key} />)}
            </ul>
        </div>
    )
}