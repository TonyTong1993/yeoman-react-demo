/**
 * Created by tongwanhua on 2017/2/27.
 */
import React from 'react';
import AddTodo from  './components/AddTodo';
import VisibilityList from  './components/VisibilityList';
import Footer from  './components/Footer'
const App = () => (
  <div>
    <AddTodo />
    <VisibilityList />
    <Footer />
  </div>
);
export default App;
