import { FC, forwardRef } from "react";
import { TextField } from "@mui/material";

export const CustomInput: FC = forwardRef((props, ref) => {
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
