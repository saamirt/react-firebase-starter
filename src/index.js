import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";

//thunk
import thunk from "redux-thunk";

const composeEnhancers =
	process.env.NODE_ENV === "development"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;

// const rrfConfig = {
// 	userProfile: "users",
// 	attachAuthIsReady: true, // attaches auth is ready promise to store
// };

// thunk is middleware allows writing action creators that return a function
// instead of an action. Useful for doing things between the action and reducer
// like accessing a database.
// .withExtraArgument function adds params as extra args for action
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(thunk.withExtraArgument({ a: 'a'})))
);

// const rrfProps = {
// 	config: rrfConfig,
// 	dispatch: store.dispatch,
// };

// Setup react-redux so that connect HOC can be used
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
