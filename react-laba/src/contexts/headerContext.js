import React, { useContext } from "react"
import { headerInfo } from "../db";

const headerContext = React.createContext();

export const useData = () => useContext(headerContext);

export default function HeaderContext({children}) {
    return (
        <headerContext.Provider value={headerInfo}>
            {children}
        </headerContext.Provider>
    )
}