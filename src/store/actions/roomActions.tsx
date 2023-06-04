import { Dispatch } from "redux";
import { getRooms } from "../../services/roomService";
import { Room, SET_AVAILABLE_ROOMS } from "../types/roomTypes";

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRooms = createAsyncThunk("rooms/fetchRooms", async () => {
  const response = await getRooms();
  return response;
});

export const setAvailableRooms = (rooms: Room[]) => {
  return {
    type: SET_AVAILABLE_ROOMS,
    payload: rooms,
  };
};

export const roomActions = {
  fetchRooms,
  setAvailableRooms,
};
