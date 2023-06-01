import {
  RoomActionTypes,
  RoomState,
  GET_ROOMS_SUCCESS,
} from "../types/roomTypes";

const initialState: RoomState = {
  rooms: [],
};

const roomReducer = (
  state = initialState,
  action: RoomActionTypes
): RoomState => {
  switch (action.type) {
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.payload,
      };
    default:
      return state;
  }
};

export default roomReducer;
