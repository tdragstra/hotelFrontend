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
export const postNewReservation = (e) => async (dispatch, getState) => {
	const data = {
		fromDate: e.fromDate,
		toDate: e.toDate,
		user: e.user,
		rooms: e.rooms,
	};
	console.log(data);
	try {
		const response = await axios.post(`${apiUrl}/createReservation`);

		console.log(response.data);
	} catch (e) {
		console.log("erreur in je eur", e.message);
	}
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
