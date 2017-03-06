/**
 * Created by tongwanhua on 2017/3/6.
 */
require('styles/Login.css');
import React from 'react';
import Logo from '../container/login/Logo';
import UserName from '../container/login/UserName';
import PassWord from '../container/login/PassWord';
import Enter from '../container/login/Enter';
import Register from '../container/login/Register';
class TodoApp extends React.Component {
  render() {
    return (
      <div className="login-container">
        <Logo />
        <UserName />
        <PassWord />
        <Enter />
        <Register />
      </div>
    );
  }
}
export default TodoApp;
