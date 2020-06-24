import React, { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children, nodeId = "node", open = false }) => {
  let nodeRef = useRef(null);

  if (open) {
    addNode();
  } else {
    if (document.getElementById(nodeId)) {
      removeNode();
    }
  }

  function addNode() {
    nodeRef.current = document.createElement("div");
    nodeRef.current.setAttribute("id", nodeId);
    document.body.appendChild(nodeRef.current);
  }

  function removeNode() {
    document.getElementById(nodeId).remove();
  }

  return <div>{open && createPortal(children, nodeRef.current)}</div>;
};

export default Portal;
