import axios from "axios";
import { Room } from "../store/types/roomTypes";

export const getRooms = async (): Promise<Room[]> => {
  const response = await axios.get("/rooms");
  return response.data.data;
};
