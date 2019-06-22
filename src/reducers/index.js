// file: src/reducers/index.js
import { combineReducers } from 'redux';
import skillReducer from './skillReducer';


const appReducer = combineReducers({
  skill: skillReducer
})

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
