import React from "react";
import classes from "./ErrorModal.module.scss";
import Modal from "./Modal";

const ErrorModal = ({ heading, text, onClick, action }) => {
  return (
    <Modal className={classes.error}>
      <h3>{heading}</h3>
      <p>{text}</p>
      <button onClick={onClick}>{action}</button>
    </Modal>
  );
};

export default ErrorModal;
