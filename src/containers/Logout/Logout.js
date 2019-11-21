import { useEffect } from "react";
import * as actions from "../../store/actions/authActions";
import { connect } from "react-redux";

const Logout = ({ logout }) => {
	useEffect(() => {
		logout();
	}, [logout]);

	return null;
};

const mapDispatchToProps = {
	logout: actions.signOut
};

export default connect(null, mapDispatchToProps)(Logout);
