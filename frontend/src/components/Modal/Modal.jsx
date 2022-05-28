import React from "react";
import ReactDom from "react-dom";
import { useContext } from "react";
import MainContext from "../../context/MainContext";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal() {
  const { isOpen, setIsOpen } = useContext(MainContext);
  const onClose = () => {
    setIsOpen(false);
  };
  if (!isOpen) {
    return (
      <div className="main">
        <button onClick={() => setIsOpen(true)}>Submit new picture</button>
      </div>
    );
  }

  return ReactDom.createPortal(
    <div className="main">
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
