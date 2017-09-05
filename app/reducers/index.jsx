import { combineReducers } from 'redux'
import campuses from './schools'
import students from './students'

// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

export default combineReducers({campuses, students});
