import {
  RoomActionTypes,
  RoomState,
  GET_ROOMS_SUCCESS,
  SET_AVAILABLE_ROOMS,
} from "../types/roomTypes";

const initialState: RoomState = {
  rooms: [],
  availableRooms: [],
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
    case SET_AVAILABLE_ROOMS:
      return {
        ...state,
        availableRooms: action.payload,
      };

    default:
      return state;
  }
};

export default roomReducer;
