require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/Base.css');
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
class AppComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
