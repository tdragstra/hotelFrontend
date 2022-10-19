import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	reservations: [],
	users: [],
	features: [],
	page: "login",
};

export const adminSlice = createSlice({
	name: "admin",
	initialState,
	reducers: {
		reservationsFetched: (state, action) => {
			state.reservations = action.payload;
		},
		reservationDelete: (state, action) => {
			const { id } = action.payload;
			state.reservations = state.reservations.filter((r) => r.id !== id);
		},
		reservationUpdate: (state, action) => {
			const { id } = action.payload;
			// const reservation = state.reservations.findByPk(id);
			state.reservations = state.reservations.filter((r) => r.id !== id);
			state.reservations = [...state.reservations, action.payload];
		},

		featuresFetched: (state, action) => {
			state.features = action.payload;
		},
		featureCreated: (state, action) => {
			state.features = [...state.features, action.payload];
		},
		featureDeleted: (state, action) => {
			state.features = state.features.filter((f) => f.id !== action.payload.id);
		},
		changePage: (state, action) => {
			if (action.payload !== state.page) {
				state.page = action.payload;
			}
		},
	},
});

export const {
	reservationsFetched,
	reservationDelete,
	reservationUpdate,
	featuresFetched,
	featureCreated,
	featureDeleted,
	changePage,
} = adminSlice.actions;

export default adminSlice.reducer;

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_SPACES_SUCCESS:
//       return { ...state, allSpaces: [...state.allSpaces, ...action.payload] };
//     case SPACE_UPDATED: {
//       return {
//         ...state,
//         allSpaces: state.allSpaces.map((space) => {
//           if (space.id !== action.payload.id) {
//             return space;
//           } else {
//             return { ...action.payload, stories: [...space.stories] };
//           }
//         }),
//       };
//     }
//     case SPACE_DETAILS_FETCHED:
//       return { ...state, spaceDetails: { ...action.payload } };
//     default:
//       return state;
//   }
// };
