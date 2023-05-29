import React from "react";
import { Modal as MUIModal, Box } from "@mui/material";
import * as Type from "./Modal.type";

const Modal = ({ show, handleCloseModal, children }: Type.IModal) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    padding: 0,
    height: 400,
    width: 600
  };

  return (
    <MUIModal open={show} onClose={() => handleCloseModal(false)}>
      <Box sx={style}>{children}</Box>
    </MUIModal>
  );
};

export default Modal;
