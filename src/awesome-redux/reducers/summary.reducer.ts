/* eslint-disable @typescript-eslint/no-unused-vars */
import {SummaryAction} from '../actions/summary.actions';

type SummaryState = {
  documents: ApplicationDocument[];
  summary?: Summary;
  error?: string;
};

const InitialState = {
  documents: [],
  summary: undefined,
  error: undefined,
};

export const SummaryReducer = (
  state: SummaryState = InitialState,
  action: SummaryAction,
) => {
  switch (action.type) {
    case 'ON_MANAGEMENT':
      return {
        ...state,
        summary: action.payload,
      };
    case 'ON_ERROR_MANAGEMENT':
      return {
        ...state,
        error: action.payload,
      };
    case 'ON_DOCUMENT':
      return {
        ...state,
        documents: action.payload,
      };
    case 'ON_ERROR_DOCUMENT':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
