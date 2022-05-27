import { useEffect } from "react";
import ReactDOM from "react-dom";

const PortalContainer = (props) => {
  const element = document.createElement('div');
  const outsideContainer = document.getElementById(props.idContainer);

  useEffect(() => {
    outsideContainer.appendChild(element);
    return () => outsideContainer.removeChild(element);
  });

  return ReactDOM.createPortal(props.children, element);
}

export default PortalContainer;
