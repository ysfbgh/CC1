import React, { useContext } from 'react';
import imgFra from './assets/france.svg';
import imgEng from './assets/united-kingdom.svg';
import imgEsp from './assets/spain.svg';
import { LangC } from './LangueContext';
import 'bootstrap/dist/css/bootstrap.css';

export default function Icons() {
    const {lang,setLang} = useContext(LangC);
  return (
    <div >
        <img src={imgFra} width='25' height='25' onClick={()=>{ setLang('FR') }} alt="frenshFlag" style={{ margin:'10px' }} />
        <img src={imgEng} width='25' height='25' onClick={()=>{ setLang('EN') }} alt="englandFlag" style={{ margin:'10px' }} />
        <img src={imgEsp} width='25' height='25' onClick={()=>{ setLang('ES') }} alt="spainFlag" style={{ margin:'10px' }} />
    </div>
  )
}
