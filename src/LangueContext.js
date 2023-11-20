import { createContext, useState } from "react";
import React from 'react';
export const LangC = createContext();


export default function LangueContext({children}) {
    const [lang,setLang] = useState('EN');
    return (
        <LangC.Provider value={{lang,setLang}}>
            {children}
        </LangC.Provider>
    )
}
