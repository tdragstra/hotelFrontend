import { createSlice } from "@reduxjs/toolkit";

const initialState = { allSpaces: [], spaceDetails: null };

export const spacesSlice = createSlice({
  name: "spaces",
  initialState,
  reducers: {
    fetchSpacesSuccess: (state, action) => {
      state.allSpaces = [...state.allSpaces, ...action.payload];
    },
    spaceUpdated: (state, action) => {
      state.allSpaces = state.allSpaces.map((space) => {
        if (space.id !== action.payload.id) {
          return space;
        } else {
          return { ...action.payload, stories: [...space.stories] };
        }
      });
    },
    spaceDetailsFetched: (state, action) => {
      state.spaceDetails = action.payload;
    },
  },
});

export const { fetchSpacesSuccess, spaceDetailsFetched, spaceUpdated } =
  spacesSlice.actions;

export default spacesSlice.reducer;

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
