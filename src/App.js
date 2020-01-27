import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect, useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";

import Header from "./components/Header";
import Loader from "./components/Loader";

import HomePage from "./containers/HomePage/HomePage";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import Logout from "./containers/Logout/Logout";
import TodosPage from "./containers/TodosPage/TodosPage";
import AddTodoPage from "./containers/AddTodoPage/AddTodoPage";

const App = ({ loggedIn }) => {
	const auth = useSelector(state => state.firebase.auth);

	let routes = loggedIn ? (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/todos" component={TodosPage} />
			<Route exact path="/addtodo" component={AddTodoPage} />
			<Route exact path="/logout" component={Logout} />
			<Redirect path="/signin" to="/" />
			<Redirect to="/" />
		</Switch>
	) : (
		<Switch>
			<Route exact path="/signin" component={SignIn} />
			<Route exact path="/signup" component={SignUp} />
			<Redirect to="/signin" />
		</Switch>
	);

	return (
		<BrowserRouter>
			<HelmetProvider>
				<Helmet
					titleTemplate="%s - React Firebase Starer"
					defaultTitle="React Firebase Starter"
				>
					<meta
						name="description"
						content="A basic boilerplate for future react apps"
					/>
				</Helmet>

				{!isLoaded(auth) ? (
					<Loader />
				) : (
					<>
						<Header loggedIn={loggedIn} />
						<div className="page m-5">{routes}</div>
					</>
				)}
			</HelmetProvider>
		</BrowserRouter>
	);
};

const mapStateToProps = ({ firebase }) => ({
	loggedIn: !!firebase.auth.uid
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
