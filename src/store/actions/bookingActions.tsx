import { Dispatch } from "redux";
import { getBookings } from "../../services/bookingService";
import { Booking } from "../types/bookingTypes";
import { RootState } from "../index";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    const response = await getBookings();
    return response;
  }
);

export const bookingActions = {
  fetchBookings,
};
