/**
 * Created by tongwanhua on 2017/3/4.
 */
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo} from  '../../actions/Action'
const mapDispatchToProps = (dispatch)=>{
  return {
    onTodoClick:(id)=>{
      dispatch(toggleTodo(id))
    }
  }
};
const getVisibleTodos = (todos,filter) =>{
 switch (filter) {
   case 'SHOW_ALL':
     return todos;
   case 'COMPLETED':
     return todos.filter(todo => todo.completed);
   case 'ACTIVE':
     return todos.filter(todo =>!todo.completed);
 }
};
const mapStateToProps = (state)=>{
  return {
    todos: getVisibleTodos(state.todos,state.visibilityFilter)
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
