import { apiUrl } from "../../config/constants";
import axios from "axios";
import { roomsFetched } from "./slice";

export const fetchAllRooms = () => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.get(`${apiUrl}/rooms`);
			console.log(response.data.rooms);
			dispatch(roomsFetched(response.data.rooms));
		} catch (e) {
			console.log("wellp", e.message);
		}
	};
};
export const postNewReservation =
	(fromDate, toDate, rooms, user) => async (dispatch, getState) => {
		const data = {
			fromDate: fromDate,
			toDate: toDate,
			user: user,
			rooms: [rooms],
		};
		console.log(data);
	};

// export const FETCH_SPACES_SUCCESS = "FETCH_SPACES_SUCCESS";
// export const SPACE_DETAILS_FETCHED = "SPACE_DETAILS_FETCHED";
// export const fetchSpaces = () => {
// 	return async (dispatch, getState) => {
// 		try {
// 			const spacesCount = getState().spaces.allSpaces.length;
// 			const response = await axios.get(
// 				`${apiUrl}/spaces?limit=${DEFAULT_PAGINATION_LIMIT}&offset=${spacesCount}`
// 			);

// 			// console.log(response.data);
// 			dispatch(fetchSpacesSuccess(response.data.spaces.rows));
// 		} catch (e) {
// 			console.log(e.message);
// 		}
// 	};
// };

// export const fetchSpaceById = (id) => {
// 	return async (dispatch, getState) => {
// 		try {
// 			const response = await axios.get(`${apiUrl}/spaces/${id}`);
// 			console.log(response);
// 			dispatch(spaceDetailsFetched(response.data.space));
// 		} catch (e) {
// 			console.log(e);
// 		}
// 	};
// };
