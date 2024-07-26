import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ handleCancelAddProject, handleAddProject }) {
  const title = useRef();
  const description = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;

    if (enteredTitle.trim() === "" || enteredDescription.trim() === "") {
      modal.current.open();
      return;
    }

    handleAddProject({
      title: enteredTitle,
      description: enteredDescription,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold my-4">Invalid Input</h2>
        <p className="mb-4">Oops ... looks like you forgot to enter a value</p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handleCancelAddProject}
              className="bg-red-400 px-6 py-2 rounded-md font-bold hover:bg-red-200"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-green-400 px-6 py-2 rounded-md font-bold hover:bg-green-200"
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input ref={title} type="text" label="Title" />
          <Input ref={description} textarea label="Description" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
