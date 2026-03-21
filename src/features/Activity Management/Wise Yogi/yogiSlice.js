import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { credAndUrl } from "../../../utils/config";

export const fetchYogiVideos = createAsyncThunk(
  "yogi/fetchYogiVideos",
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

export const fetchSingleYogi = createAsyncThunk(
  "yogi/fetchSingleYogi",
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
        err.response?.data || "Failed to fetch Yogi video",
      );
    }
  },
);

export const updateYogi = createAsyncThunk(
  "yogi/updateYogi",
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
        err.response?.data || "Failed to update Yogi video",
      );
    }
  },
);

export const createYogi = createAsyncThunk(
  "yogi/createYogi",
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

const yogiSlice = createSlice({
  name: "yogi",
  initialState: {
    videos: [],
    singleYogi: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchYogiVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchYogiVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload; // <-- this will now be the array
      })
      .addCase(fetchYogiVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch videos";
      })

      .addCase(fetchSingleYogi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleYogi.fulfilled, (state, action) => {
        state.loading = false;
        state.singleYogi = action.payload;
      })
      .addCase(fetchSingleYogi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch Yogi video";
      })
      .addCase(updateYogi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateYogi.fulfilled, (state, action) => {
        state.loading = false;
        state.singleYogi = action.payload;
      })
      .addCase(updateYogi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to update Yogi video";
      })

      .addCase(createYogi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createYogi.fulfilled, (state, action) => {
        state.loading = false;
        state.videos.push(action.payload);
      })
      .addCase(createYogi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default yogiSlice.reducer;
