import React from "react";

interface IModal {
  show: boolean;
  handleCloseModal: (show: boolean) => void;
  children: React.ReactElement
}

export type { IModal };
