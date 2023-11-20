import React from 'react'

export default function Tasks({txt,deleteT,modifier}) {
  return (
    <div>
        <input type="text" name="tacheinseree" className='m-2 p-2 w-50 border form-control-md ' readOnly value={txt}/>
        <input type="button" value="suprimer" className='btn btn-danger m-2' onClick={deleteT} />
        <input type="button" value="Modifier" className='btn btn-primary m-2' onClick={modifier} /> <br />
    </div>
  )
}
