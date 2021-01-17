import React from "react"
import { useData } from "../../context"
import AchievmentsItem from "./AchievmentsItem"

export default function Achievments() {
    const {achievments} = useData();
    return (
        <div>
            <h1>Achievments</h1>
            {
                achievments.map((achievment, key) => <AchievmentsItem {...achievment} key={key} />)
            } 
        </div>

    )
}