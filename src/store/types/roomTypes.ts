export interface Room {
  id: number;
  name: string;
  pricePerNightNet: number;
  priceTaxPercentage: number;
  image: string;
}

export const GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS";

export interface GetRoomsSuccessAction {
  type: typeof GET_ROOMS_SUCCESS;
  payload: Room[];
}

export type RoomActionTypes = GetRoomsSuccessAction;

export interface RoomState {
  rooms: Room[];
}
