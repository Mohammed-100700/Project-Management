import React, { useState } from "react";

function TaskItem({ task, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  function handleCancelClick() {
    setIsEditing(false);
    setNewText(task.text);
  }

  function handleSaveClick() {
    onEdit(task.taskId, newText);
    setIsEditing(false);
  }

  return (
    <li className="flex justify-between my-4 items-center">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="border p-2 rounded w-[50%] mr-4"
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div>
        {isEditing ? (
          <>
            <button
              onClick={handleSaveClick}
              className="bg-green-400 px-6 rounded-md font-bold hover:bg-green-200 mr-2"
            >
              Save
            </button>
            <button
              onClick={handleCancelClick}
              className="bg-gray-400 px-6 rounded-md font-bold hover:bg-gray-200"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEditClick}
              className="bg-blue-400 px-6 rounded-md font-bold hover:bg-blue-200 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(task.taskId)}
              className="bg-red-400 px-6 rounded-md font-bold hover:bg-red-200"
            >
              Clear
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TaskItem;
