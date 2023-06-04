import {
  BookingActionTypes,
  BookingState,
  GET_BOOKINGS_SUCCESS,
} from "../types/bookingTypes";

const initialState: BookingState = {
  bookings: [
    {
      id: 1,
      roomId: 2,
      startDateUtc: "2021-01-19T09:00:00.000Z",
      endDateUtc: "2021-01-22T13:00:00.000Z",
    },
    {
      id: 2,
      roomId: 3,
      startDateUtc: "2021-06-11T08:00:00.000Z",
      endDateUtc: "2021-06-22T12:00:00.000Z",
    },
    {
      id: 3,
      roomId: 1,
      startDateUtc: "2021-11-05T09:00:00.000Z",
      endDateUtc: "2021-11-09T13:00:00.000Z",
    },
  ],
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
