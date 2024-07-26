import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-green-300 rounded p-2 font-bold hover:bg-green-200"
    >
      {children}
    </button>
  );
}

export default Button;
