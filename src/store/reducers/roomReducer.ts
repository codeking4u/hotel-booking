import {
  RoomActionTypes,
  RoomState,
  GET_ROOMS_SUCCESS,
  SET_AVAILABLE_ROOMS,
} from "../types/roomTypes";

const initialState: RoomState = {
  rooms: [
    {
      id: 1,
      name: "Cheaproom",
      pricePerNightNet: 56,
      priceTaxPercentage: 0.09,
      image: "https://via.placeholder.com/400x200.png?text=Cheap%20room",
    },
    {
      id: 2,
      name: "Not so cheaproom",
      pricePerNightNet: 84,
      priceTaxPercentage: 0.09,
      image:
        "https://via.placeholder.com/400x200.png?text=Not%20so%20cheap%20room",
    },
    {
      id: 3,
      name: "Expensiveroom",
      pricePerNightNet: 149,
      priceTaxPercentage: 0.09,
      image: "https://via.placeholder.com/400x200.png?text=Expensive%20room",
    },
  ],
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
