import React from "react";
import Button from "./Button";

function SideBar({
  handleStartAddProject,
  projects,
  handleSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 bg-gray-400 px-8 py-16 rounded-r-md md:w-72">
      <h2 className="text-xl font-bold mb-8 uppercase"> My Projects</h2>
      <Button onClick={handleStartAddProject}>+ Create Project</Button>
      <ul className="mt-8">
        {projects.map((project) => {
          let css =
            "text-left w-full rounded-md p-2 hover:bg-white hover:text-black";

          if (project.id === selectedProjectId) {
            css += " text-black font-bold";
          } else {
            css += " text-white";
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => handleSelectProject(project.id)}
                className={css}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
