export interface IAuthorizationDefaultValue {
  nextStep: STEPS;
  loginPasswordData: ILoginPasswordData;
  addressData: IAddressData;
  phoneNumberData: IPhoneNumberData;
}

export interface ILoginPasswordData {
  login: string;
  eMail: string;
  password: string;
  repeatPassword: string;
}

export interface IAddressData {
  country: string;
  city: string;
  street: string;
  house: string;
}

export interface IPhoneNumberData {
  phone: string;
  confirmationCode: string;
}

export enum STEPS {
  FIRST = "/",
  SECOND = "/step2",
  THIRD = "/step3",
}

export const authorizationDefaultValue: IAuthorizationDefaultValue = {
  nextStep: STEPS.FIRST,
  loginPasswordData: {
    login: "",
    eMail: "",
    password: "",
    repeatPassword: "",
  },
  addressData: { country: "", city: "", street: "", house: "" },
  phoneNumberData: {
    phone: "+7",
    confirmationCode: "",
  },
};
