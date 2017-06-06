import {connect} from 'react-redux';
import {removeTodo, toggleTodo} from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        remove: (id) => {
            dispatch(removeTodo(id));
        },
        toggle: (id) => {
            dispatch(toggleTodo(id));
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList;