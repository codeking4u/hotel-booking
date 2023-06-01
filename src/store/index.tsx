import { combineReducers } from "redux";
import bookingReducer from "./reducers/bookingReducer";
import roomReducer from "./reducers/roomReducer";

const rootReducer = combineReducers({
  bookings: bookingReducer,
  rooms: roomReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
