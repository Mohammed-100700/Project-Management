import React, { forwardRef, useImperativeHandle, useRef } from "react";
import Button from "./Button";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md mx-auto"
    >
      {children}
      <form className="mt-4 text-right" method="dialog">
        <Button>Okay</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
