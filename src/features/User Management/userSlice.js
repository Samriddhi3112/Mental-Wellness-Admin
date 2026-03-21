// src/features/users/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { credAndUrl } from "../../utils/config";

// Helper to get auth header
const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Token missing. Please login again.");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
};

// Async thunk to fetch users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (params = {}, { rejectWithValue }) => {
    try {
      const {
        page = 1,
        limit = 10,
        language = "",
        mainFocus = "",
        role = "",
        status = "",
        search = "",
      } = params;

      const response = await axios.get(`${credAndUrl.BASE_URL}/admin/users`, {
        params: { page, limit, language, mainFocus, role, status, search },
        headers: getAuthHeader(),
      });

      if (
        response.data.success === false &&
        response.data.message === "Invalid or expired token"
      ) {
        localStorage.removeItem("token");
        return rejectWithValue({
          message: "Invalid or expired token. Please login again",
        });
      }

      return response.data; // { success, data, total }
    } catch (error) {
      // Normalize error
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong while fetching users";
      return rejectWithValue({ message });
    }
  },
);

export const getUserById = createAsyncThunk(
  "users/getUserById",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${credAndUrl.BASE_URL}/admin/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message);
    }
  },
);

export const toggleBlockUsers = createAsyncThunk(
  "users/toggleBlockUsers",
  async ({ userIds, block }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      // multiple users ke liye loop (API ek-ek user ka hai)
      const requests = userIds.map((id) =>
        axios.patch(
          `${credAndUrl.BASE_URL}/admin/users/toggle-block/${id}`,
          { block },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        ),
      );

      await Promise.all(requests);

      return { userIds, block };
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to update users",
      );
    }
  },
);

export const exportUsers = createAsyncThunk(
  "users/exportUsers",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${credAndUrl.BASE_URL}/admin/users/export`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          responseType: "blob",
        },
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Export failed");
    }
  },
);

export const exportOnboardingReport = createAsyncThunk(
  "users/exportOnboardingReport",
  async (userId, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${credAndUrl.BASE_URL}/admin/users/export-onboarding/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data; // ✅ JSON return karo
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    singleUser: null,
    total: 0,
    loading: false,
    error: null,
    page: 1,
    limit: 10,

    userDetail: null,
    userDetailLoading: false,
    userDetailError: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.users = [];
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.data?.users || [];
        state.total = action.payload.data?.pagination?.total || 0;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Something went wrong";
      })

      .addCase(getUserById.pending, (state) => {
        state.userDetailLoading = true;
        state.userDetailError = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.singleUser = action.payload;
        state.userDetailLoading = false;
        state.userDetail = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.userDetailLoading = false;
        state.userDetailError = action.payload || "Failed to fetch user";
      })
      .addCase(toggleBlockUsers.fulfilled, (state, action) => {
        const { userIds, block } = action.payload;

        state.users = state.users.map((user) =>
          userIds.includes(user._id)
            ? { ...user, isAccountBlocked: block }
            : user,
        );
      })
      .addCase(exportUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(exportUsers.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(exportUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, setLimit } = userSlice.actions;
export default userSlice.reducer;
