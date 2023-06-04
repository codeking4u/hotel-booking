export const SET_START_DATE = "SET_START_DATE";
export const SET_END_DATE = "SET_END_DATE";

export interface SetStartDateAction {
  type: typeof SET_START_DATE;
  payload: string;
}

export interface SetEndDateAction {
  type: typeof SET_END_DATE;
  payload: string;
}
export interface SearchFormState {
  startDate: string;
  endDate: string;
}

export type SearchFormActionTypes = SetStartDateAction | SetEndDateAction;
