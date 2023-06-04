export interface Room {
  id: number;
  name: string;
  pricePerNightNet: number;
  priceTaxPercentage: number;
  image: string;
}
export interface RoomState {
  rooms: Room[];
  availableRooms: Room[];
}

export interface GetRoomsSuccessAction {
  type: typeof GET_ROOMS_SUCCESS | typeof SET_AVAILABLE_ROOMS;
  payload: Room[];
}

export const GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS";
export const SET_AVAILABLE_ROOMS = "SET_AVAILABLE_ROOMS";

export type RoomActionTypes = GetRoomsSuccessAction;
