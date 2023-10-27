import React, {useState} from "react";
export const TaskCreator=({cretateNewTask})=>{
    const [newTaskName, setNewTaskName] = useState('')
    const handelSubmit = (e)=>{
        e.preventDefault();
        cretateNewTask(newTaskName)
        setNewTaskName('')
    }
    return(
            <form className={'taskName'} onSubmit={handelSubmit}>
               <div className={'content py-3'}>
                   <div className='col-9'>
                       <input className="form-control" type="text"
                              placeholder='Ingresa una nueva tarea'
                              value={newTaskName}
                              onChange={(e)=>{setNewTaskName(e.target.value)}}/>
                   </div>
                   <button className={'btnSaveTask'}>Save Task</button>
               </div>
            </form>
    )

}