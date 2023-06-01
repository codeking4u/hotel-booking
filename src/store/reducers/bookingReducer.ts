import {
  BookingActionTypes,
  BookingState,
  GET_BOOKINGS_SUCCESS,
} from "../types/bookingTypes";

const initialState: BookingState = {
  bookings: [],
};

const bookingReducer = (
  state = initialState,
  action: BookingActionTypes
): BookingState => {
  switch (action.type) {
    case GET_BOOKINGS_SUCCESS:
      return {
        ...state,
        bookings: action.payload,
      };
    default:
      return state;
  }
};

export default bookingReducer;
