import { FC, ReactNode } from "react";
import "../style/ui_elements_style.css";

interface IFormContent {
  children: ReactNode;
  props: any;
}

export const FormContent: FC<IFormContent> = ({ children, props }) => {
  return (
    <form className="form_content" noValidate {...props}>
      {children}
    </form>
  );
};
