import { PencilIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

function InlineEdit({ ...props }) {
  const [isEditing, setIsEditing] = useState(false);
  const id = props.id || Math.random().toString(36).substr(2, 9);

  const type = props.type || "text";

  return (
    <div id="on-hover">
      <div className="flex-auto">
        {isEditing ? (
          <>
            <input type={type} className="transparent-input" id={id} {...props} />
            <div className="form-decoration" />
          </>
        ) : (
          <div className="flex-auto">
            {props.value}
            <PencilIcon className="icon-on-hover-parent" onClick={() => setIsEditing((isEditing) => !isEditing)} />
          </div>
        )}
      </div>
    </div>
  );
}

export default InlineEdit;
