import React from "react";

export const VisibilityControl = ({setShowCompleted, cleanTask, isChecked})=>{
    const handleDeleted = () =>{
        if (window.confirm('Are you sure you want to deleted it?')){
            cleanTask()
        }
    }
    return(
        <div className='d-flex justify-content-between bg-secondary text-white p-2 text-center border-secondary'>
           <div className='form-check form-switch d-flex flex-row gap-2'>
               <input
                   className='form-check-input'
                   type="checkbox"
                   checked={isChecked}
                   onChange={e=> setShowCompleted(e.target.checked)}/>
               <label>Mostrar Tareas Hechas </label>
               <button className='btn btn-danger btn-sm' onClick={()=>{handleDeleted()}}>
                   Clear
               </button>
           </div>
        </div>
    )
}