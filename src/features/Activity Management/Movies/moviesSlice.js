import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { credAndUrl } from "../../../utils/config";

// GET Movies
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${credAndUrl.BASE_URL}/admin/movies?page=1&limit=10&search=`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data);
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
        `${credAndUrl.BASE_URL}/admin/movies/presigned-url`,
        {
          fileName: file.name,
          fileType: file.type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
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
        }
      );

      // get uploaded file URL from response
      const fileUrl = uploadRes.data?.data?.fileUrl || uploadRes.data?.data?.url;
      if (!fileUrl) throw new Error("File URL not returned from upload API");

      console.log("Uploaded File URL:", fileUrl);
      return fileUrl;
    } catch (err) {
      console.error("Upload Error:", err);
      return rejectWithValue(err.response?.data || err.message || "Upload failed");
    }
  }
);

// CREATE MOVIE
export const createMovie = createAsyncThunk(
  "movies/createMovie",
  async (payload, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${credAndUrl.BASE_URL}/admin/movies`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Create failed");
    }
  },
);

export const deleteMovie = createAsyncThunk(
  "movies/deleteMovie",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(`${credAndUrl.BASE_URL}/admin/movies/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return id; 
    } catch (err) {
      return rejectWithValue(err.response?.data || "Delete failed");
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload?.data?.movies || [];
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
      })

      .addCase(createMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMovie.fulfilled, (state, action) => {
        state.loading = false;
        // optionally new movie add kar sakte ho
        state.movies.unshift(action.payload?.data);
      })
      .addCase(createMovie.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = state.movies.filter((m) => m._id !== action.payload);
      })
      .addCase(deleteMovie.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default moviesSlice.reducer;
