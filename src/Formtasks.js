import React from 'react'
import Tasks from './Tasks'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Formtasks({}) {
  const [tasks,setTasks] = useState([
    {id:uuidv4(),nom:"sport"},
    {id:uuidv4(),nom:"film"},
    {id:uuidv4(),nom:"coder en react"}
  ]) ;
  const [task,setTask] = useState('');
  const addTask = ()=>{
    let newTasks = [...tasks];
    let newTask = {};
    newTask.id = uuidv4();
    newTask.nom = task ;
    newTasks.push(newTask) ;
    setTasks(newTasks) ;
    setTask('');
  }
  const supTask = (t)=>{
    let filtredTab = tasks.filter((p)=>{ return p.id != t}) ;
    setTasks(filtredTab);
  }
  const modTask = (t)=>{
    setTask(t.nom);

    supTask(t.id);
  }
  return (
    <div>
        <h1>tache 1 to do list</h1>
        <form className="formtask">
          <p className='font-weight-bold'>entrer une tache :</p>
            <input type="text" name="tache" className='m-2 p-2 w-75 border form-control-md' id="tache" value={task} onChange={(e)=>{ return setTask(e.target.value) }} /> 
            <input type="button" value="ajouter"  className='btn btn-success ' onClick={addTask}/>
        </form>
      <ul>
        {
          tasks.map((e)=>{ return <li key={e.id} className="list-group-item list-group-item-dark"> <Tasks deleteT={()=>supTask(e.id)} txt={e.nom} modifier={()=>modTask(e)}/> </li>})
        }
      </ul>
    </div>
  )
}
