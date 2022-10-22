import { FC } from "react";
import { FormContainer } from "../ui_elements/form_container";
import { FormContent } from "../ui_elements/form_content";
import { CustomInput } from "../ui_elements/custom_input";
import { FormTitle } from "../ui_elements/form_title";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../ui_elements/submit_button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { ILoginPasswordData, STEPS } from "../helpers/default_value";
import { authorizationReducerSlice } from "../store/reducers/authorization";
import { requiredValue } from "../helpers/const";

export const LoginAndPasswordForm: FC = () => {
  const { loginPasswordData } = useAppSelector(
    (state) => state.authorizationReducer
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPasswordData>({
    mode: "onBlur",
    defaultValues: loginPasswordData,
  });

  const onSubmit = (data: ILoginPasswordData) => {
    dispatch(authorizationReducerSlice.actions.submitLoginPassword(data));
    navigate(STEPS.SECOND);
  };

  return (
    <FormContainer>
      <FormTitle title="Логин и пароль (1 этап)" />

      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          {...register("login", {
            required: requiredValue,
          })}
          type="text"
          label="Логин"
          error={!!errors.login}
          helperText={errors?.login?.message}
        />

        <CustomInput
          {...register("eMail", {
            required: requiredValue,
          })}
          type="email"
          label="Почта"
          error={!!errors.eMail}
          helperText={errors?.eMail?.message}
        />

        <CustomInput
          {...register("password", {
            required: requiredValue,
          })}
          type="password"
          label="Пароль"
          error={!!errors.password}
          helperText={errors?.password?.message}
        />

        <CustomInput
          {...register("repeatPassword", {
            required: requiredValue,
          })}
          type="password"
          label="Повторите пароль"
          error={!!errors.repeatPassword}
          helperText={errors?.repeatPassword?.message}
        />

        <SubmitButton>Продолжить</SubmitButton>
      </FormContent>
    </FormContainer>
  );
};
