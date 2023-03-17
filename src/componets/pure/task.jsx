import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

export  const TaskComponet = ({ task }) => {
  return (
    <div>
    <h2>
        Nombre: { task.name }
    </h2>
    <h3>
        Descripcion: { task.description }
    </h3>
    <h4>
       level: { task.level }
    </h4>
    <h5>
       La tarea esta: { task.completed ? 'COMPLETED': 'PENDING'}
    </h5>
    </div>
  )
}

TaskComponet.propTypes = {
    task: PropTypes.instanceOf(Task)
}

 