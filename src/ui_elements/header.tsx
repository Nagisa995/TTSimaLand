import { Typography } from "@mui/material";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <Typography
      component="h1"
      variant="h4"
      align="center"
      style={{ margin: "20px 0px" }}
    >
      Форма регистрации
    </Typography>
  );
};
