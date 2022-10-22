import { Divider, Typography } from "@mui/material";
import { FC } from "react";

interface IFormTitle {
  title: string;
}

export const FormTitle: FC<IFormTitle> = ({ title }) => {
  return (
    <>
      <Typography align="center">{title}</Typography>
      <Divider flexItem />
    </>
  );
};
