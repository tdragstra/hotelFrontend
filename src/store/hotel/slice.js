import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	hotelConfig: {},
	rooms: [],
	guests: { total: 1, adults: 1, children: 0 },
	requests: {
		singleBeds: false,
		requestBalcony: false,
		requestGroundFloor: false,
	},
	reservationData: { rooms: [] },
};

export const hotelSlice = createSlice({
	name: "hotel",
	initialState,
	reducers: {
		roomsFetched: (state, action) => {
			state.rooms = action.payload;
			// state.allSpaces = [...state.allSpaces, ...action.payload];
		},
		hotelConfigFetched: (state, action) => {
			state.hotelConfig = action.payload;
		},
		incrementA: (state, action) => {
			state.guests.adults += 1;
			state.guests.total += 1;
		},
		decrementA: (state, action) => {
			if (state.guests.adults !== 0) {
				state.guests.adults -= 1;
			}
			if (state.guests.total !== 0) {
				state.guests.total -= 1;
			}
		},
		incrementC: (state, action) => {
			state.guests.children += 1;
			state.guests.total += 1;
		},
		decrementC: (state, action) => {
			if (state.guests.children !== 0) {
				state.guests.children -= 1;
			}
			if (state.guests.total !== 0) {
				state.guests.total -= 1;
			}
		},
		changeSingle: (state, action) => {
			state.requests.singleBeds = !state.requests.singleBeds;
		},
		changeBalcony: (state, action) => {
			state.requests.requestBalcony = !state.requests.requestBalcony;
		},
		changeGroundFloor: (state, action) => {
			state.requests.requestGroundFloor = !state.requests.requestGroundFloor;
		},
		addDateReservation: (state, action) => {
			state.reservationData = {
				...state.reservationData,
				fromDate: action.payload.fromDate,
				toDate: action.payload.toDate,
			};
		},
		addRoomAndNumber: (state, action) => {
			const room = state.rooms.find((e) => e.id === action.payload.id);
			if (action.payload.number === 0) {
				state.reservationData.rooms = state.reservationData.rooms.filter(
					(e) => e.id !== action.payload.id
				);
			} else {
				state.reservationData = {
					...state.reservationData,
					rooms: [...state.reservationData.rooms, room],
				};
			}
		},

		// spaceUpdated: (state, action) => {
		// 	state.allSpaces = state.allSpaces.map((space) => {
		// 		if (space.id !== action.payload.id) {
		// 			return space;
		// 		} else {
		// 			return { ...action.payload, stories: [...space.stories] };
		// 		}
		// 	});
		// },
		// spaceDetailsFetched: (state, action) => {
		// 	state.spaceDetails = action.payload;
		// },
	},
});

export const {
	roomsFetched,
	hotelConfigFetched,
	incrementA,
	decrementA,
	incrementC,
	decrementC,
	changeSingle,
	changeBalcony,
	changeGroundFloor,
	addDateReservation,
	addRoomAndNumber,
} = hotelSlice.actions;

export default hotelSlice.reducer;

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
