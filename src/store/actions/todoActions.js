import * as actions from "./actionTypes";

// Add a todo
export const addTodo = data => async (dispatch, getState, { a }) => {
	dispatch({ type: actions.ADD_TODO_START });
	try {
		if (!getState().todos.todos[data.title]){
			dispatch({ type: actions.ADD_TODO_SUCCESS, payload: data });
		} else {
			dispatch({ type: actions.ADD_TODO_FAIL, payload: "Todo already exists" });
		}
		return true;
	} catch (err) {
		dispatch({ type: actions.ADD_TODO_FAIL, payload: err.message });
	}
};

// Delete todo
export const deleteTodo = id => async (
	dispatch,
	getState,
	{ a }
) => {
	dispatch({ type: actions.DELETE_TODO_START });
	try {
		if (getState().todos.todos[id]){
			dispatch({ type: actions.DELETE_TODO_SUCCESS, payload: id });
		} else {
			dispatch({ type: actions.DELETE_TODO_FAIL, payload: "Todo does not exist" });
		}
	} catch (err) {
		dispatch({ type: actions.DELETE_TODO_FAIL, payload: "Todo does not exist" });
	}
};

// edit todo
export const editTodo = (id, data) => async (
	dispatch,
	getState,
	{ a }
) => {
	dispatch({ type: actions.ADD_TODO_START });
	try {
		if (getState().todos.todos[id]){
			dispatch({ type: actions.ADD_TODO_SUCCESS, payload: data });
		} else {
			dispatch({ type: actions.ADD_TODO_FAIL, payload: "Todo does not exist" });
		}
		return true;
	} catch (err) {
		dispatch({ type: actions.ADD_TODO_FAIL, payload: "Todo does not exist" });
	}
};