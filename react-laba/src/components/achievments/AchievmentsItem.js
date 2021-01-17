import React from 'react'

export default function AchievmentsItem({title, description}) {
    return (
        <div>
            <h3>{title}</h3>
            {description}
        </div>
    )
}