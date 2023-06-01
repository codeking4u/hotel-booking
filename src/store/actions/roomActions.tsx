import { Dispatch } from "redux";
import { getRooms } from "../../services/roomService";
import { Room } from "../types/roomTypes";
import { RootState } from "../index";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  const response = await getRooms();
  return response;
});

export const roomActions = {
  fetchRooms,
};
