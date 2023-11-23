import React from 'react'
import './Tasks.css'

export default function Tasks({txt,deleteT,modifier}) {
  return (
    <div>
      <div >
        <input type="text" name="tacheinseree" className='m-2 border form-control text-center Tasks ' readOnly value={txt}/>
        <input type="button" value="suprimer" className='btn btn-danger m-2' onClick={deleteT} />
        <input type="button" value="Modifier" className='btn btn-primary m-2' onClick={modifier} /> <br />
    </div>
    </div>
  )
}
