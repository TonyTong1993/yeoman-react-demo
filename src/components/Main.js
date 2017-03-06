require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/Base.css');
import App from  './Login';
import React from 'react';
class AppComponent extends React.Component {
  render() {
    return (
        <App />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
