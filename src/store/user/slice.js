import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	token: localStorage.getItem("token"),
	profile: [],
	reservation: [],
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			// localStorage.setItem("token", action.payload.token);
			// state.token = action.payload.token;
			state.profile = action.payload;
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
		reservationSuccess: (state, action) => {
			state.reservation = action.payload;
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
	reservationSuccess,
	storyDeleteSuccess,
} = userSlice.actions;

export default userSlice.reducer;
