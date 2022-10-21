import { FC, ReactNode } from "react";
import { Button } from "@mui/material";

interface ISubmitButton {
  children: ReactNode;
  props: any;
}

export const SubmitButton: FC<ISubmitButton> = ({ children, props }) => {
  return (
    <Button type="submit" variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
};
