import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      type={props.type || "button"}
      className="hover:bg-blue-200 hover:text-blue-600 disabled:hover:bg-neutral-100 disabled:hover:text-gray-700 disabled:opacity-80 disabled:cursor-not-allowed px-2 py-1 font-semibold text-gray-600 bg-gray-200 rounded"
      // className="border-neutral-200 // disabled:hover:bg-neutral-100 bg-neutral-100 hover:border-transparent hover:bg-blue-600 hover:text-neutral-100 disabled:hover:text-gray-700 disabled:opacity-80 disabled:cursor-not-allowed inline-flex items-center w-auto px-3 py-2 space-x-1 text-sm font-semibold text-gray-700 border rounded-lg"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
