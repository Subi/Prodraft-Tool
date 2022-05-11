import React, {createContext, useContext, useState} from "react";


export const DraftContext = createContext({})



function DraftProvider({children}) {
    const [draft , setDraft] = useState(null)

    const updateDraft = draft => {
        console.log(draft)
        setDraft(draft)
    }

    const contextProps = {
        draft,
        updateDraft
    }

    return (
        <DraftContext.Provider value={contextProps}>
            {children}
        </DraftContext.Provider>
    )

}




export default DraftProvider