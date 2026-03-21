// src/features/ActivityManagement/Music/musicSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { credAndUrl } from "../../../utils/config";

// Async thunk to fetch music
export const fetchMusic = createAsyncThunk(
  "music/fetchMusic",
  async (params = {}, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const { mood = "", status = "", page = 1, limit = 10 } = params;

      const res = await axios.get(
        `${credAndUrl.BASE_URL}/admin/music?mood=${mood}&status=${status}&page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return res.data.data.music;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching music");
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
        `${credAndUrl.BASE_URL}/admin/music/presigned-url`,
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

export const saveMusic = createAsyncThunk(
  "music/saveMusic",
  async (musicData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${credAndUrl.BASE_URL}/admin/music`,
        musicData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data || err.message || "Save failed",
      );
    }
  },
);

export const deleteMusic = createAsyncThunk(
  "movies/deleteMusic",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(
        `${credAndUrl.BASE_URL}/admin/music/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return id;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Delete failed");
    }
  },
);

const musicSlice = createSlice({
  name: "music",
  initialState: {
    tracks: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMusic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = action.payload;
      })
      .addCase(fetchMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch music";
      })

      .addCase(saveMusic.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.musicList.push(action.payload);
      })
      .addCase(saveMusic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(deleteMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.tracks = action.payload;
      })
      .addCase(deleteMusic.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default musicSlice.reducer;
