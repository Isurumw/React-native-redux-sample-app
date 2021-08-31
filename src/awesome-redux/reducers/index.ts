import {combineReducers} from 'redux';
import {SummaryReducer} from './summary.reducer';

const rootReducer = combineReducers({
  summaryReducer: SummaryReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;
export default rootReducer;
