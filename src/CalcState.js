import React, { useState } from 'react'
import './CalcState.css';

export default function Calc() {

const [exp,setExp]=useState('');


const clear=()=>{
  setExp('');
}

const result=()=>{
  try {
  let v=exp;
    setExp(eval(v));
    
   }
  catch(error){
    setExp('expression non valide') ;
  }
}
const tapecar=(e)=>{
let oldval=exp;
let newval=oldval+e.target.value;
setExp(newval);
}

  return (
    <div className='Cal'>
      <input value={exp} type="text" className="form-control ss" />
    <br />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-primary' value="1" />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-primary' value="2" />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-primary' value="3" />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-secondary' value="+" />
      <br />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-primary' value="4" />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-primary' value="5" />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-primary' value="6" />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-secondary' value="-" />
      <br />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-primary' value="7" />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-primary' value="8" />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-primary' value="9" />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-secondary' value="*" />
      <br />
      <input onClick={(e)=>tapecar(e)} type="button" className='m-3 btn btn-secondary' value="/" />
      <input onClick={(e)=>tapecar(e)} type="button" value="0" className='m-3 btn btn-secondary' />
      <input onClick={clear} type="button" value="C" className='m-3 btn btn-danger'/>
      <input onClick={result} type="button" value="=" className='m-3 btn btn-success' />
      <br />
    </div>
  )
}
