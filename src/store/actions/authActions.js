import * as actions from "./actionTypes";

// Sign up action creator
export const signUp = data => async (
	dispatch,
	getState,
	{ a }
) => {
	dispatch({ type: actions.AUTH_START });
	try {
		//DO AUTH STUFF HERE
		await true;
		dispatch({ type: actions.AUTH_SUCCESS });
	} catch (err) {
		dispatch({ type: actions.AUTH_FAIL, payload: err.message });
	}
	dispatch({ type: actions.AUTH_END });
};

// Logout action creator
export const signOut = () => async (dispatch, getState, { a }) => {
	try {
		//AWAIT AUTH STUFF
		await true;
	} catch (err) {
		console.log(err.message);
	}
};

// Login action creator
export const signIn = data => async (dispatch, getState, { a }) => {
	dispatch({ type: actions.AUTH_START });
	try {
		dispatch({ type: actions.AUTH_SUCCESS });
	} catch (err) {
		dispatch({ type: actions.AUTH_FAIL, payload: err.message });
	}
	dispatch({ type: actions.AUTH_END });
};

// Login action creator
export const signInWithGoogle = data => async (
	dispatch,
	getState,
	{ a }
) => {
	dispatch({ type: actions.AUTH_START });
	try {
		await true;
		dispatch({ type: actions.AUTH_SUCCESS });
	} catch (err) {
		console.log(err);
		dispatch({ type: actions.AUTH_FAIL, payload: err.message });
	}
	dispatch({ type: actions.AUTH_END });
};

// Login action creator
export const signInWithGithub = data => async (
	dispatch,
	getState,
	{ a }
) => {
	dispatch({ type: actions.AUTH_START });
	try {
		await true;
		dispatch({ type: actions.AUTH_SUCCESS });
	} catch (err) {
		console.log(err);
		dispatch({ type: actions.AUTH_FAIL, payload: err.message });
	}
	dispatch({ type: actions.AUTH_END });
};

// Clean up messages
export const clean = () => ({
	type: actions.CLEAN_UP
});

// Verify email actionTypes
export const verifyEmail = () => async (
	dispatch,
	getState,
	{ a }
) => {
	dispatch({ type: actions.VERIFY_START });
	try {
		await true;
		dispatch({ type: actions.VERIFY_SUCCESS });
	} catch (err) {
		dispatch({ type: actions.VERIFY_FAIL, payload: err.message });
	}
};

// Send recover password
export const recoverPassword = data => async (
	dispatch,
	getState,
	{ a }
) => {
	dispatch({ type: actions.RECOVERY_START });
	try {
		// send email here
		await true;
		dispatch({ type: actions.RECOVERY_SUCCESS });
	} catch (err) {
		dispatch({ type: actions.RECOVERY_FAIL, payload: err.message });
	}
};

// Edit profile
export const editProfile = data => async (
	dispatch,
	getState,
	{ a }
) => {
	dispatch({ type: actions.PROFILE_EDIT_START });
	try {
		//await other updates
		dispatch({ type: actions.PROFILE_EDIT_SUCCESS });
	} catch (err) {
		dispatch({ type: actions.PROFILE_EDIT_FAIL, payload: err.message });
	}
};

// Delete user
export const deleteUser = () => async (
	dispatch,
	getState,
	{ a }
) => {
	dispatch({ type: actions.DELETE_START });
	try {
		//await user deletion from db
		await true
		//await user todos deletion from db
		await true
		// await user delete
		await true;
	} catch (err) {
		dispatch({ type: actions.DELETE_FAIL, payload: err.message });
	}
};
