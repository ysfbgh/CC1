import React, { useContext } from 'react';
import traductions from './assets/data';
import { LangC } from './LangueContext';

export default function Content() {
    const { lang } = useContext(LangC); 
    return (
        <div>
            <h1>{traductions[lang].title}</h1>
        </div>
    );
}
