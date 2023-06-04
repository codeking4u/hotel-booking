const bookingDataReducer = (
  state: BookingData = { startDate: "", endDate: "" },
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SET_BOOKING_DATES":
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
      };
    default:
      return state;
  }
};

export default bookingDataReducer;
