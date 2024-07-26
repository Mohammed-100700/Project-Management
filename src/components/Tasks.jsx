import React, { useState } from "react";
import NewTask from "./NewTask";
import TaskItem from "./TaskItem";

function Tasks({ onAddTask, tasks, onDelete, onEdit }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className="my-4">This Project does not have any tasks yet</p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <TaskItem
              key={task.taskId}
              onDelete={onDelete}
              onEdit={onEdit}
              task={task}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
