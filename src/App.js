import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { connect } from "react-redux";

import Header from "./components/Header";
import Loader from "./components/Loader";

import HomePage from "./containers/HomePage/HomePage";
import SignIn from "./containers/SignIn/SignIn";
import SignUp from "./containers/SignUp/SignUp";
import Logout from "./containers/Logout/Logout";
import TodosPage from "./containers/TodosPage/TodosPage";
import AddTodoPage from "./containers/AddTodoPage/AddTodoPage";

const App = ({ loggedIn }) => {
	// const auth = useSelector(state => state.aws.auth);

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
					titleTemplate="%s - React AWS Starer"
					defaultTitle="React AWS Starter"
				>
					<meta
						name="description"
						content="A basic boilerplate for future react apps"
					/>
				</Helmet>

				{false ? (
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

const mapStateToProps = ({ aws }) => ({
	loggedIn: true
});

const mapDispatchToProps = { a: 'a'};

export default connect(mapStateToProps, mapDispatchToProps)(App);
