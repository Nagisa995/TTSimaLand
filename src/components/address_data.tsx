import { FC } from "react";
import { FormContainer } from "../ui_elements/form_container";
import { FormContent } from "../ui_elements/form_content";
import { CustomInput } from "../ui_elements/custom_input";
import { FormTitle } from "../ui_elements/form_title";
import { useForm } from "react-hook-form";
import { SubmitButton } from "../ui_elements/submit_button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { IAddressData, STEPS } from "../helpers/default_value";
import { authorizationReducerSlice } from "../store/reducers/authorization";
import { requiredValue } from "../helpers/const";

export const AddressData: FC = () => {
  const { addressData } = useAppSelector((state) => state.authorizationReducer);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddressData>({
    mode: "onBlur",
    defaultValues: addressData,
  });

  const onSubmit = (data: IAddressData) => {
    dispatch(authorizationReducerSlice.actions.submitAddressData(data));
    navigate(STEPS.THIRD);
  };

  return (
    <FormContainer>
      <FormTitle title="Где проживаете (2 этап)" />

      <FormContent onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          {...register("country", {
            required: requiredValue,
          })}
          type="text"
          label="Страна"
          error={!!errors.country}
          helperText={errors?.country?.message}
        />

        <CustomInput
          {...register("city", {
            required: requiredValue,
          })}
          type="text"
          label="Город"
          error={!!errors.city}
          helperText={errors?.city?.message}
        />

        <CustomInput {...register("street")} type="text" label="Улица" />

        <CustomInput {...register("house")} type="text" label="Дом" />

        <SubmitButton>Продолжить</SubmitButton>
      </FormContent>
    </FormContainer>
  );
};
