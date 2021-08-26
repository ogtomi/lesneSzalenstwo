import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = (email, password) => {
  return {
    type: SIGN_IN,
    payload: { email, password },
  };
};
