import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import { TaskComponet } from '../pure/task'
 

export const TaskListComponent = props => {

const defaultTask = new Task('example','description default',false,LEVELS.NORMAL)

return (
    <div> 
    <div>Your task</div>
    <TaskComponet task={ defaultTask }></TaskComponet>
    </div>
  )
}
 