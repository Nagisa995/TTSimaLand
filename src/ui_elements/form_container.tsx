import { FC, ReactNode } from "react";
import { Container } from "@mui/material";
import "../style/ui_elements_style.css";

interface IFormContainer {
  children: ReactNode;
}

export const FormContainer: FC<IFormContainer> = ({ children }) => {
  return (
    <Container className="form_container" maxWidth="xs">
      {children}
    </Container>
  );
};
