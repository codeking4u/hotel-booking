import {
  SET_START_DATE,
  SET_END_DATE,
  SetStartDateAction,
} from "../types/searchFormTypes";

export interface SetEndDateAction {
  type: typeof SET_END_DATE;
  payload: string;
}

export const setStartDate = (startDate: string): SetStartDateAction => ({
  type: SET_START_DATE,
  payload: startDate,
});

export const setEndDate = (endDate: string): SetEndDateAction => ({
  type: SET_END_DATE,
  payload: endDate,
});
