import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token"),
  profile: null,
  space: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      state.token = action.payload.token;
      state.profile = action.payload.user;
    },
    logOut: (state, action) => {
      localStorage.removeItem("token");
      state.token = null;
      state.profile = null;
    },
    tokenStillValid: (state, action) => {
      state.profile = action.payload.user;
      state.space = action.payload.space;
    },
    spaceUpdated: (state, action) => {
      state.space = { ...action.payload, stories: state.space.stories };
    },
    storyPostSuccess: (state, action) => {
      state.space.stories.push(action.payload);
    },
    storyDeleteSuccess: (state, action) => {
      const storyId = action.payload;
      state.space.stories = state.space.stories.filter((s) => s.id !== storyId);
    },
  },
});

export const {
  loginSuccess,
  logOut,
  tokenStillValid,
  spaceUpdated,
  storyPostSuccess,
  storyDeleteSuccess,
} = userSlice.actions;

export default userSlice.reducer;
