require('normalize.css/normalize.css');
require('styles/App.css');
import App from  '../container/App';
import React from 'react';
import { todos } from  '../reducers/Reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
let store = createStore(todos);
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
