/**
 * Created by tongwanhua on 2017/3/6.
 */
import App from  '../container/App';
import React from 'react';
import { todos,visibilityFilter } from  '../reducers/Reducer';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
let reducers = combineReducers({
  todos,
  visibilityFilter
});
let store = createStore(reducers);
class TodoApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
export default TodoApp;
