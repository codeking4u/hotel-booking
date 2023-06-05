import { combineReducers } from "redux";
import bookingReducer from "./reducers/bookingReducer";
import roomReducer from "./reducers/roomReducer";
import searchFormReducer from "./reducers/searchFormReducer";
import bookingDataReducer from "./reducers/bookingDataReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  bookings: bookingReducer,
  rooms: roomReducer,
  searchForm: searchFormReducer,
  bookingData: bookingDataReducer,
  productsData: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
