/**
 * Created by tongwanhua on 2017/3/4.
 */
import React from 'react';
import Todo from './Todo'
let TodoList = ({todos,onTodoClick}) => {
  return (
    <ul>
      {
        todos.map(todo =>{
        return (
          <Todo key={todo.id} {...todo} onClick={()=>onTodoClick(todo.id)}/>
        )
      })
      }
    </ul>
  );
};
export default  TodoList;
