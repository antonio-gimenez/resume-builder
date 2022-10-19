import React from "react";
import useResume from "../../hooks/useResume";
import { Progress } from "../ui";

function Default() {
  const { resume } = useResume();
  return <div className="resume"></div>;
}

export default Default;
