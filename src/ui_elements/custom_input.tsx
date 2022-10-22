import { FC, forwardRef } from "react";
import { TextField } from "@mui/material";

interface ICustomInput {
  [key: string]: any;
}

export const CustomInput: FC<ICustomInput> = forwardRef((props, ref) => {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});
