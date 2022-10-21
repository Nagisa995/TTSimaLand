import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IAddressData,
  ILoginPasswordData,
  IPhoneNumberData,
  STEPS,
} from "../../helpers/default_value";
import { getStorageValue, saveValueInStorage } from "../../helpers/utils";

export const authorizationReducerSlice = createSlice({
  name: "authorizationData",
  initialState: getStorageValue(),
  reducers: {
    submitLoginPassword(state, action: PayloadAction<ILoginPasswordData>) {
      state.nextStep = STEPS.SECOND;
      state.loginPasswordData = action.payload;
      saveValueInStorage(state);
    },
    submitAddressData(state, action: PayloadAction<IAddressData>) {
      state.nextStep = STEPS.THIRD;
      state.addressData = action.payload;
      saveValueInStorage(state);
    },
    submitPhoneData(state, action: PayloadAction<IPhoneNumberData>) {
      state.nextStep = STEPS.FIRST;
      state.phoneNumberData = action.payload;
      saveValueInStorage(state);
    },
  },
});

export default authorizationReducerSlice.reducer;
