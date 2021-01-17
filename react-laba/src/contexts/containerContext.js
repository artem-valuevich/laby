import React, { useContext, useState } from 'react'
import { initAchievments, initEducation, initSkills, initWorks, initInterests, initLanguages} from "../db";

const Context = React.createContext();

export function useData() {
    return useContext(Context)
}


export default function ContextProvider({children}) {
    const [works, ] = useState(initWorks);
    const [skills, ] = useState(initSkills);
    const [achievments,] = useState(initAchievments);
    const [education,] = useState(initEducation);
    const [languages, ] = useState(initLanguages);
    const [interests, ] = useState(initInterests);
    return (
        <Context.Provider value={{
            works,
            skills,
            education,
            achievments,
            languages,
            interests
        }}>
            {children}
        </Context.Provider>
    )
}