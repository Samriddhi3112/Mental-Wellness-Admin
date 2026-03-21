import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { credAndUrl } from "../../utils/config";

export const adminLogin = createAsyncThunk(
  "auth/adminLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${credAndUrl.BASE_URL}/admin/auth/login`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  },
);

export const logoutAdmin = createAsyncThunk(
  "auth/logoutAdmin",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      const response = await axios.post(
        `${credAndUrl.BASE_URL}/user/user-logout`,
        {
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  },
);

//----------------------------------------------------------------------------------------------------------------------------------

export const requestPasswordReset = createAsyncThunk(
  "auth/requestPasswordReset",
  async (email, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${credAndUrl.BASE_URL}/admin/auth/request-password-reset`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  },
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async ({ email, otp, newPassword }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${credAndUrl.BASE_URL}/admin/auth/reset-password`,
        { email, otp, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async (email, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${credAndUrl.BASE_URL}/admin/auth/request-password-reset`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data;
        state.token = action.payload.token;

        if (action.payload.token) {
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(adminLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutAdmin.pending, (state) => {
        state.loading = true;
      })

      .addCase(logoutAdmin.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.jwtToken = null;

        localStorage.removeItem("token");
        localStorage.removeItem("userData");
      })

      .addCase(logoutAdmin.rejected, (state) => {
        state.loading = false;

        state.user = null;
        state.jwtToken = null;

        localStorage.removeItem("token");
        localStorage.removeItem("UserData");
      })

      .addCase(requestPasswordReset.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(requestPasswordReset.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(requestPasswordReset.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
