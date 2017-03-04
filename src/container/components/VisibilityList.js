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
const getVisibleTodos = (todos) =>{
  return todos
};
const mapStateToProps = (state)=>{
  return {
    todos: getVisibleTodos(state)
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
