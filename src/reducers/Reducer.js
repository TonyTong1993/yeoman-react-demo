import {combineReducers} from 'redux'
 const todo = (state,action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        undefined,
        id:action.id,
        text:action.text
      };
    case 'TOGGLE_TODO':
    if (state.id == action.id) {
      return Objet.assign({}, state, {
        completed: !state.completed
      });
    }else {
      return state
    }
    default:
      return state
  }
};
 const todos = (state,action) => {
  switch (action.type) {
    case 'ADD_TODO':
  	return [...state,todo(undefined,action)];
    case 'TOGGLE_TODO' :
      return state.map(t =>todo(t,action));
  	default:
  	return state
  }
};
 const visibilityFilter = (state = "SHOW_ALL", action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return {
          state,
          filter: action.filter
        }
        default:
        return state
    }

};
export default reducers = combineReducers({
    todos,
    visibilityFilter,
})