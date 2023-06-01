export interface Booking {
  id: number;
  roomId: number;
  startDateUtc: string;
  endDateUtc: string;
}

export const GET_BOOKINGS_SUCCESS = "GET_BOOKINGS_SUCCESS";

export interface GetBookingsSuccessAction {
  type: typeof GET_BOOKINGS_SUCCESS;
  payload: Booking[];
}

export type BookingActionTypes = GetBookingsSuccessAction;

export interface BookingState {
  bookings: Booking[];
}
