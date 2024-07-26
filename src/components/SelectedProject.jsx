import React, { useState } from "react";
import Tasks from "./Tasks";

function SelectedProject({
  project,
  onAddTask,
  tasks,
  onDeleteTask,
  onDeleteProject,
  onEditTask,
}) {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-black">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2 uppercase">{project.title}</h1>
          <button
            onClick={onDeleteProject}
            className="bg-red-400 px-6 rounded-md font-bold hover:bg-red-200"
          >
            Delete
          </button>
        </div>
        <p className="whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks
        onEdit={onEditTask}
        onDelete={onDeleteTask}
        tasks={tasks}
        onAddTask={onAddTask}
      />
    </div>
  );
}

export default SelectedProject;
