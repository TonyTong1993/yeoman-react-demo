/**
 * Created by tongwanhua on 2017/2/27.
 */
import { connect } from 'react-redux';
import { addTodo }  from '../../actions/Action'
let AddTodo = (dispatch) => {
  let input;
  return (
    <form action="addTodo" onSubmit={e =>{
      e.preventDefault();
      if (!input.value.trim()) {return}
      dispatch(addTodo(input.value))
    }}>
      <input
        type="text"
        ref={node => input = node}/>
      <button>Add Item</button>
    </form>
  )
}
AddTodo = connect()(AddTodo);
export default AddTodo;
