import createDataContext from './createDataContext';
const authReducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

const signup = dispatch => {
	return ({ email, password }) => {
		//Try to signup
		//Handle Success
		//Handle Failure
	};
};

const signin = dispatch => {
	return ({ email, password }) => {
		//Try to signup
		//Handle Success
		//Handle Failure
	};
};

const signout = dispatch => {
	return () => {
		//Signout
	};
};
export const { Context, Provider } = createDataContext(
	authReducer,
	{ signup, signin, signout },
	{
		isSignedIn: false,
	}
);
