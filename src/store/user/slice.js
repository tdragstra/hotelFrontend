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
			localStorage.setItem("token", action.payload.token);
			state.token = action.payload.token;
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

		reservationSuccess: (state, action) => {
			state.reservation = action.payload;
		},
	},
});

export const { loginSuccess, logOut, tokenStillValid, reservationSuccess } =
	userSlice.actions;

export default userSlice.reducer;
