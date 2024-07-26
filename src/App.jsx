import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import SelectedProject from "./components/SelectedProject";
import SideBar from "./components/SideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: "Not Selected",
    projects: [],
    tasks: [],
  });

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: "Not Selected",
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.taskId !== id),
      };
    });
  }

  function handleEditTask(id, newText) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: projectState.tasks.map((task) =>
          task.taskId === id
            ? {
                ...task,
                text: newText,
              }
            : task
        ),
      };
    });
  }

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        taskId: Math.random(),
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: "Not Selected",
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: "Add",
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: "Not Selected",
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  const selectedTasks = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId
  );

  let content = (
    <SelectedProject
      onEditTask={handleEditTask}
      tasks={selectedTasks}
      onAddTask={handleAddTask}
      project={selectedProject}
      onDeleteTask={handleDeleteTask}
      onDeleteProject={handleDeleteProject}
    />
  );

  if (projectState.selectedProjectId === "Not Selected") {
    content = <NoProject handleStartAddProject={handleStartAddProject} />;
  } else if (projectState.selectedProjectId === "Add") {
    content = (
      <NewProject
        handleAddProject={handleAddProject}
        handleCancelAddProject={handleCancelAddProject}
      />
    );
  }

  return (
    <div className="flex h-screen my-8 gap-8">
      <SideBar
        projects={projectState.projects}
        handleStartAddProject={handleStartAddProject}
        handleSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </div>
  );
}

export default App;
