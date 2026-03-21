import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/User Management/userSlice";
import authReducer from "../features/auth/authSlice";
import moviesReducer from "../features/Activity Management/Movies/moviesSlice";
import musicReducer from "../features/Activity Management/Calm Music/musicSlice";
import yogiReducer from "../features/Activity Management/Wise Yogi/yogiSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userReducer,
    movies: moviesReducer,
    music: musicReducer,
    yogi: yogiReducer,
  },
});

export default store;
