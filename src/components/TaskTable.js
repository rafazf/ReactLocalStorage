import React from "react";
import {TaskRow} from "./TaskRow";
export const TaskTable = ({tasks, toggleTask, showCompleted= false})=>{
    const taskTableRow = (doneValue) =>{
        return(
            tasks
                .filter(task => task.done === doneValue)
                .map(task=>(
                <TaskRow key={task.name} task={task} toggleTask={toggleTask}/>
            ))
        )
    }
    return(
        <table className="table table-dark table-striped table-bordered border-secondary">
            <thead>
            <tr className='table-light'>
                <th>Tasks</th>
            </tr>
            </thead>
            <tbody>
            {
                taskTableRow(showCompleted)
            }
            </tbody>
        </table>
    )
}