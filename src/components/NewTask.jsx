import React, { useState } from "react";

function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredTask}
        onChange={handleChange}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-gray-300"
      />
      <button onClick={handleClick} className="hover:font-bold">
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
