import { storageName } from "./const";
import {
  authorizationDefaultValue,
  IAuthorizationDefaultValue,
} from "./default_value";

const storage = localStorage;

export const getStorageValue = (): IAuthorizationDefaultValue => {
  try {
    const storageValue = storage.getItem(storageName);
    const isStorageEmpty = storageValue === null;

    if (isStorageEmpty) {
      return authorizationDefaultValue;
    } else {
      return JSON.parse(storageValue);
    }
  } catch (error) {
    return authorizationDefaultValue;
  }
};

export const saveValueInStorage = (value: IAuthorizationDefaultValue): void => {
  storage.setItem(storageName, JSON.stringify(value));
};
