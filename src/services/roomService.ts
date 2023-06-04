import axios from "axios";
import { Room } from "../store/types/roomTypes";

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const getRooms = async (): Promise<Room[]> => {
  try {
    const response = await axios.get(`${serverUrl}/rooms`);
    return response.data.data;
  } catch (error) {
    // Handle error
    throw new Error("Failed to fetch Rooms data");
  }
};
