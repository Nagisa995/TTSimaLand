import { FC, ReactNode } from "react";
import { Button } from "@mui/material";

interface ISubmitButton {
  children: ReactNode;
  [key: string]: any;
}

export const SubmitButton: FC<ISubmitButton> = ({ children, ...other }) => {
  return (
    <Button type="submit" variant="contained" color="primary" {...other}>
      {children}
    </Button>
  );
};
