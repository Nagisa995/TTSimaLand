//@ts-nocheck
import { FC } from "react";
import { Typography, Divider, Button } from "@mui/material";
import { FormContainer } from "../ui_elements/form_container";
import { FormContent } from "../ui_elements/form_content";
import { CustomInput } from "../ui_elements/custom_input";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../ui_elements/submit_button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IPhoneNumberData, STEPS } from "../helpers/default_value";
import { authorizationReducerSlice } from "../store/reducers/authorization";

export const PhoneData: FC = () => {
  const { phoneNumberData } = useAppSelector(
    (state) => state.authorizationReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPhoneNumberData>({
    mode: "onBlur",
    defaultValues: phoneNumberData,
  });

  const onSubmit = (data: IPhoneNumberData) => {
    dispatch(authorizationReducerSlice.actions.submitPhoneData(data));
    navigate(STEPS.FIRST);
  };

  return (
    <FormContainer>
      <Typography align="center">Номер телефона (3 этап)</Typography>
      <Divider flexItem />

      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          {...register("phone", {
            required: {
              value: true,
              message: "Обязательное поле",
            },
          })}
          type="tel"
          label="Номер телефона"
          error={!!errors.phone}
          helperText={errors?.phone?.message}
        />

        <Button variant="contained" color="secondary">
          Получить код
        </Button>

        <CustomInput
          {...register("confirmationCode", {
            required: {
              value: true,
              message: "Обязательное поле",
            },
          })}
          type="text"
          label="Код подтверждения"
          error={!!errors.confirmationCode}
          helperText={errors?.confirmationCode?.message}
        />

        <SubmitButton>Завершить регистрацию</SubmitButton>
      </FormContent>
    </FormContainer>
  );
};
