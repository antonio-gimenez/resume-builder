import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      type={props.type || "button"}
      className="hover:bg-blue-200 hover:text-blue-600 disabled:hover:bg-neutral-100 disabled:hover:text-gray-700 disabled:opacity-80 disabled:cursor-not-allowed px-2 py-1 font-semibold text-gray-600 bg-gray-200 rounded"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
