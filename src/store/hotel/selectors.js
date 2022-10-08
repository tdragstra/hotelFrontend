export const selectAllRooms = (state) => state.hotel.rooms;
export const selectHotelConfig = (state) => state.hotel.hotelConfig;
export const selectAdults = (state) => state.hotel.guests.adults;
export const selectChildren = (state) => state.hotel.guests.children;
export const selectTotalGuests = (state) => state.hotel.guests.total;
export const selectSingleBeds = (state) =>
	state.hotel.requests.requestSingleBeds;
export const selectGroundFloor = (state) =>
	state.hotel.requests.requestGroundFloor;
export const selectBalcony = (state) => state.hotel.requests.requestBalcony;
