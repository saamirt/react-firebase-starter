import { combineReducers } from "redux";

import authReducer from "./authReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
	auth: authReducer,
	todos: todoReducer,
	aws: (state = { auth: true}, { type, payload }) => {
		switch (type) {
			default:
				return state;
		}
	}	
});

export default rootReducer;
