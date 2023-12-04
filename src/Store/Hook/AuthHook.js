import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  InputRegister: [],
  InputLogin: [],
};

const AuthHook = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setLoginData(state) {},
    setLogin(state, action) {
      const newData = action.payload;
      state.InputLogin.push({
        email: newData.email,
        password: newData.password,
      });
    },
    setRegisterData(state) {},
    setRegister(state, action) {
      const newData = action.payload;
      state.InputRegister.push({
        email: newData.email,
        password: newData.password,
      });
    },
  },
});

export const { setRegister, setRegisterData, setLoginData, setLogin } =
  AuthHook.actions;

export default AuthHook.reducer;
