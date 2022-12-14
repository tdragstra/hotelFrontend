import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./appState/slice";
import hotelReducer from "./hotel/slice";
import adminReducer from "./admin/slice";

import userReducer from "./user/slice";

export default configureStore({
	reducer: {
		appState: appStateReducer,
		user: userReducer,
		hotel: hotelReducer,
		admin: adminReducer,
	},
});
