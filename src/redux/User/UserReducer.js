import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  googleLoginAPI,
  loginAPI,
  logoutAPI,
  registerAPI,
} from "../../hooks/UserAPI";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  isFetching: true,
  error: false,
};

export const userLogin = createAsyncThunk("user/login", async (user) => {
  const { userCred, error } = await loginAPI(user);
  if (error) {
    return { user: null, error };
  }
  toast.success("Login Successfull", { autoClose: 1500 });
  return { userCred, error: null };
});

export const userRegister = createAsyncThunk(
  "user/register",
  async (newUser) => {
    const { userCred, error } = await registerAPI(newUser);
    if (error) {
      return { user: null, error };
    }
    toast.success(`Register Successfull ${userCred.name}`, { autoClose: 1500 });
    return { userCred, error: null };
  }
);

export const userLogout = createAsyncThunk("user/logout", async () => {
  const { userCred, error } = await logoutAPI();
  if (error) {
    return { user: null, error };
  }
  return { userCred, error: true };
});

export const googleLogin = createAsyncThunk("user/googleLogin", async () => {
  const { userCred, error } = await googleLoginAPI();
  if (error) {
    return { user: null, error };
  }
  return { userCred, error: null };
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isFetching = false;
      // console.log("User state updated : ", state.user);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isFetching = false;
        state.user = action.payload.userCred;
        state.error = action.payload.error;
      })

      .addCase(userRegister.fulfilled, (state, action) => {
        state.isFetching = false;
        state.user = action.payload.userCred;
        state.error = action.payload.error;
      })

      .addCase(userLogout.fulfilled, (state, action) => {
        state.isFetching = false;
        state.user = action.payload.userCred;
        state.error = action.payload.error;
      })

      .addCase(googleLogin.fulfilled, (state, action) => {
        state.isFetching = false;
        state.user = action.payload.userCred;
        state.error = action.payload.error;
      });
  },
});

export const userReducer = userSlice.reducer;
export const userSelection = (state) => state.user;
