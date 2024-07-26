import React from "react";
import Button from "./Button";

function NoProject({ handleStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <h2 className="text-xl my-4 text-blue-500 font-bold">
        No Project Selected
      </h2>
      <p className="text-red-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p>
        <Button onClick={handleStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}

export default NoProject;
