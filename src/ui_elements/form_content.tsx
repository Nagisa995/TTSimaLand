import { FC, ReactNode } from "react";
import "../style/ui_elements_style.css";

interface IFormContent {
  children: ReactNode;
}

export const FormContent: FC<IFormContent> = ({ children, ...other }) => {
  return (
    <form className="form_content" noValidate {...other}>
      {children}
    </form>
  );
};
