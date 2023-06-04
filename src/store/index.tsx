import { combineReducers } from "redux";
import bookingReducer from "./reducers/bookingReducer";
import roomReducer from "./reducers/roomReducer";
import searchFormReducer from "./reducers/searchFormReducer";

const rootReducer = combineReducers({
  bookings: bookingReducer,
  rooms: roomReducer,
  searchForm: searchFormReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
