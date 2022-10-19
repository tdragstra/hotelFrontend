import axios from "axios";
import { apiUrl } from "../../config/constants";
import { appLoading, appDoneLoading, setMessage } from "../appState/slice";
import { showMessageWithTimeout } from "../appState/actions";
import { featureCreated, featureDeleted, reservationsFetched } from "./slice";

export const fetchFeatures = () => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.get(`${apiUrl}/admin/features`);
			console.log(response.data);
		} catch (e) {
			console.log("error", e.message);
		}
	};
};

export const createFeature = (data) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.post(
				`${apiUrl}/admin/features/create`,
				data
			);
			console.log(response.data);
			dispatch(featureCreated(response.data.feature));
			dispatch(showMessageWithTimeout("success", true, response.data.message));
		} catch (e) {
			console.log("error", e.message);
		}
	};
};

export const deleteFeature = (id) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.delete(
				`${apiUrl}/admin/features/delete/${id}`
			);
			console.log(response.data);
			// if (response.data.feature === null) {
			// 	return dispatch(
			// 		showMessageWithTimeout("danger", true, "Feature ID not found")
			// 	);
			// }
			dispatch(featureCreated(response.data.feature));
			dispatch(showMessageWithTimeout("success", true, response.data.message));
		} catch (e) {
			if (e.response) {
				// If its a non 2xx status code
				if (e.response.status === 404) {
					dispatch(
						showMessageWithTimeout("danger", true, e.response.data.message)
					);
				} else {
					showMessageWithTimeout("danger", true, "Something went wrong!");
				}
			} else {
				showMessageWithTimeout("danger", true, "Something went wrong!");
			}
			console.log("tims backend error", e.message);

			// dispatch(showMessageWithTimeout("danger", true, e.response.data.message));
		}
	};
};

export const fetchReservations = () => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.get(`${apiUrl}/admin/reservations`);

			console.log(response.data);
			dispatch(reservationsFetched(response.data));
		} catch (e) {
			console.log("error", e.message);
		}
	};
};

export const deleteReservation = (id) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.delete(
				`${apiUrl}/admin/reservations/delete/${id}`
			);

			console.log(response.data);
		} catch (e) {
			console.log("error", e.message);
		}
	};
};

export const updateReservation = (id, object) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.patch(
				`${apiUrl}/admin/reservations/edit/${id}`,
				object
			);

			console.log("response", response.data);
		} catch (e) {
			console.log("error", e.message);
		}
	};
};
