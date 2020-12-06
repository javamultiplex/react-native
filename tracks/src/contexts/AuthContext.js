import createDataContext from './createDataContext';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';
import trackerApi from '../api/tracker';
const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signup':
			return { errorMessage: '', token: action.payload };
		default:
			return state;
	}
};

const signup = dispatch => async ({ email, password }) => {
	try {
		const response = await trackerApi.post('/signup', { email, password });
		const { token } = response.data;
		await AsyncStorage.setItem('token', token);
		dispatch({
			type: 'signup',
			payload: token,
		});
		navigate('TrackList');
	} catch (err) {
		dispatch({
			type: 'add_error',
			payload: 'Something went wrong in signup!',
		});
	}
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
		token: null,
		errorMessage: '',
	}
);
