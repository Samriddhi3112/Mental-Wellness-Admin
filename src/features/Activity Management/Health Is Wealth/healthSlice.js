import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { credAndUrl } from "../../../utils/config";

export const fetchHealthVideos = createAsyncThunk(
  "health/fetchhealthVideos",
  async ({ category, language, page, limit }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${credAndUrl.BASE_URL}/admin/wise-yogi`, {
        params: { category, language, page, limit },
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data.data.wiseYogis;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Failed to fetch videos");
    }
  },
);

export const uploadFileToS3 = createAsyncThunk(
  "movies/uploadFile",
  async (file, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      // STEP 1: Get presigned URL
      const presignedRes = await axios.post(
        `${credAndUrl.BASE_URL}/admin/wise-yogi/presigned-url`,
        {
          fileName: file.name,
          fileType: file.type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      const presignedData = presignedRes.data?.data;
      if (!presignedData) throw new Error("Presigned URL not returned");
      console.log("Presigned Data:", presignedData);

      // STEP 2: Upload file using common upload API
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await axios.post(
        `${credAndUrl.BASE_URL}/common/upload-optimized`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        },
      );

      // get uploaded file URL from response
      const fileUrl =
        uploadRes.data?.data?.fileUrl || uploadRes.data?.data?.url;
      if (!fileUrl) throw new Error("File URL not returned from upload API");

      console.log("Uploaded File URL:", fileUrl);
      return fileUrl;
    } catch (err) {
      console.error("Upload Error:", err);
      return rejectWithValue(
        err.response?.data || err.message || "Upload failed",
      );
    }
  },
);

export const fetchSinglehealth = createAsyncThunk(
  "health/fetchSinglehealth",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${credAndUrl.BASE_URL}/admin/wise-yogi/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return res.data.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || "Failed to fetch Health video",
      );
    }
  },
);

export const updateHealth = createAsyncThunk(
  "health/updatehealth",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${credAndUrl.BASE_URL}/admin/wise-yogi/${id}`,
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return res.data.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || "Failed to update Health video",
      );
    }
  },
);

export const createHealth = createAsyncThunk(
  "health/createhealth",
  async (payload, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${credAndUrl.BASE_URL}/admin/wise-yogi`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      return res.data?.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || err.message || "Create failed",
      );
    }
  },
);

const healthSlice = createSlice({
  name: "health",
  initialState: {
    videos: [],
    singleHealth: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHealth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHealth.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload; // <-- this will now be the array
      })
      .addCase(fetchHealthVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch videos";
      })

      .addCase(fetchSingleHealth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleHealth.fulfilled, (state, action) => {
        state.loading = false;
        state.singleHealth = action.payload;
      })
      .addCase(fetchSingleHealth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch Health video";
      })
      .addCase(updateHealth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateHealth.fulfilled, (state, action) => {
        state.loading = false;
        state.singleHealth = action.payload;
      })
      .addCase(updateHealth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to update Health video";
      })

      .addCase(createHealth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createHealth.fulfilled, (state, action) => {
        state.loading = false;
        state.videos.push(action.payload);
      })
      .addCase(createHealth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default HealthSlice.reducer;
