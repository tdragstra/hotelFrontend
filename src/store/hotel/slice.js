import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	hotelConfig: {},
	rooms: [],

	reservationData: {
		rooms: [],
		user: {},
		guests: { total: 1, adults: 1, children: 0 },
		requests: {
			singleBeds: false,
			requestBalcony: false,
			requestGroundFloor: false,
		},
		arrivalTime: "15:00:00",
	},
	step: "reservation",
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
			state.reservationData.guests.adults += 1;
			state.reservationData.guests.total += 1;
		},
		decrementA: (state, action) => {
			if (state.reservationData.guests.adults !== 0) {
				state.reservationData.guests.adults -= 1;
			}
			if (state.reservationData.guests.total !== 0) {
				state.reservationData.guests.total -= 1;
			}
		},
		incrementC: (state, action) => {
			state.reservationData.guests.children += 1;
			state.reservationData.guests.total += 1;
		},
		decrementC: (state, action) => {
			if (state.reservationData.guests.children !== 0) {
				state.reservationData.guests.children -= 1;
			}
			if (state.reservationData.guests.total !== 0) {
				state.reservationData.guests.total -= 1;
			}
		},
		changeSingle: (state, action) => {
			state.reservationData.requests.singleBeds = !state.requests.singleBeds;
		},
		changeBalcony: (state, action) => {
			state.reservationData.requests.requestBalcony =
				!state.requests.requestBalcony;
		},
		changeGroundFloor: (state, action) => {
			state.reservationData.requests.requestGroundFloor =
				!state.requests.requestGroundFloor;
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
		addUserInfo: (state, action) => {
			state.reservationData = {
				...state.reservationData,
				user: action.payload,
			};
		},
		addArrivalTime: (state, action) => {
			state.reservationData.arrivalTime = action.payload;
		},
		addPassword: (state, action) => {
			state.reservationData = {
				...state.reservationData,
				user: { ...state.reservationData.user, password: action.payload },
			};
		},
		updateStep: (state, action) => {
			state.step = action.payload;
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
	addUserInfo,
	updateStep,
	addArrivalTime,
	addPassword,
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
