export const selectAllRooms = (state) => state.hotel.rooms;
export const selectHotelConfig = (state) => state.hotel.hotelConfig;
export const selectAdults = (state) =>
	state.hotel.reservationData.guests.adults;
export const selectChildren = (state) =>
	state.hotel.reservationData.guests.children;
export const selectTotalGuests = (state) =>
	state.hotel.reservationData.guests.total;
export const selectSingleBeds = (state) =>
	state.hotel.reservationData.requests.requestSingleBeds;
export const selectGroundFloor = (state) =>
	state.hotel.reservationData.requests.requestGroundFloor;
export const selectBalcony = (state) =>
	state.hotel.reservationData.requests.requestBalcony;
export const selectReservationData = (state) => state.hotel.reservationData;
export const selectStep = (state) => state.hotel.step;
