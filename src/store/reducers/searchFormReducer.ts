import {
  SET_START_DATE,
  SET_END_DATE,
  SearchFormActionTypes,
  SearchFormState,
} from "../types/searchFormTypes";

const initialState: SearchFormState = {
  startDate: "",
  endDate: "",
};

const searchFormReducer = (
  state = initialState,
  action: SearchFormActionTypes
): SearchFormState => {
  switch (action.type) {
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    default:
      return state;
  }
};

export default searchFormReducer;
