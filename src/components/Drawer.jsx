import React, { useState } from "react";
import { createPortal } from "react-dom";

const drawPortal = document.getElementById("drawer");

function Drawer({ open = false, children, onCloseDrawer }) {
  const drawerOpened = <div className={"drawer open"}>{children}</div>;
  const drawerClosed = <div className={"drawer closed"}>{children}</div>;
  return createPortal(open ? drawerOpened : drawerClosed, drawPortal);
}

export default Drawer;
