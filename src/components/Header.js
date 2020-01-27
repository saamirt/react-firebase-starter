import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ loggedIn }) => {
	const links = loggedIn
		? [
				{ path: "/todos", text: "Todos" },
				{ path: "/addtodo", text: "Add Todo" },
				{ path: "/logout", text: "Logout" }
		  ]
		: [
				{ path: "/signin", text: "Sign In" },
				{ path: "/signup", text: "Sign Up" }
		  ];

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavLink
				to="/"
				activeClassName="active"
				className="navbar-brand"
				href="#"
			>
				StarterApp
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav mr-auto">
					{links.map(i => (
						<li key={i.path} className="nav-item">
							<NavLink
								to={i.path}
								activeClassName="active"
								className="nav-link"
								href="#"
							>
								{i.text}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Header;
