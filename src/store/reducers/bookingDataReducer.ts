import { Room } from "../types/roomTypes";

interface BookingData {
  startDate: string;
  endDate: string;
  room: Room | null; // Updated to include room data
}

const initialState: BookingData = {
  startDate: "",
  endDate: "",
  room: null,
};

const bookingDataReducer = (
  state: BookingData = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "SET_BOOKING_DATA":
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        room: action.payload.room, // Update the room data in the state
      };
    default:
      return state;
  }
};

export default bookingDataReducer;
