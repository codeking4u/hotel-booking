import { createAsyncThunk } from "@reduxjs/toolkit";
import { Booking } from "../types/bookingTypes";
import { RootState } from "..";

// Simulated API call to fetch bookings data
const fetchBookingsData = async (): Promise<Booking[]> => {
  // Simulated response data
  const response = {
    data: [
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

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return response.data;
};

export const fetchBookings = createAsyncThunk<
  Booking[],
  void,
  { state: RootState }
>("bookings/fetchBookings", async (_, { getState }) => {
  // You can access the Redux store state using getState() if needed

  // Simulate API call to fetch bookings data
  const response = await fetchBookingsData();
  return response;
});
