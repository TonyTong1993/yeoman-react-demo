
 const todo = (state,action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        undefined,
        id:action.id,
        text:action.text,
        completed:false
      };
    case 'TOGGLE_TODO':
    if (state.id == action.id) {
      return Object.assign({}, state, {
        completed: !state.completed
      });
    }else {
      return state
    }
    default:
      return state
  }
};
export const todos = (state,action) => {
  if (!state){
    state = []
  }
  switch (action.type) {
    case 'ADD_TODO':
  	return [...state,todo(undefined,action)];
    case 'TOGGLE_TODO' :
      return state.map(t =>todo(t,action));
  	default:
  	return state
  }
};


