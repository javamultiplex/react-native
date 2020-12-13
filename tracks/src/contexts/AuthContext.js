import createDataContext from './createDataContext';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';
import trackerApi from '../api/tracker';
const authReducer = (state, action) => {
	switch (action.type) {
		case 'add_error':
			return { ...state, errorMessage: action.payload };
		case 'signin':
			return { errorMessage: '', token: action.payload };
		case 'clear_error_message':
			return { ...state, errorMessage: '' };
		default:
			return state;
	}
};

const clearErrorMessage = dispatch => () => {
	dispatch({
		type: 'clear_error_message',
	});
};

const signup = dispatch => async ({ email, password }) => {
	try {
		const response = await trackerApi.post('/signup', { email, password });
		const { token } = response.data;
		await AsyncStorage.setItem('token', token);
		dispatch({
			type: 'signin',
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

const signin = dispatch => async ({ email, password }) => {
	try {
		const response = await trackerApi.post('/signin', { email, password });
		const { token } = response.data;
		await AsyncStorage.setItem('token', token);
		dispatch({
			type: 'signin',
			payload: token,
		});
		navigate('TrackList');
	} catch (err) {
		dispatch({
			type: 'add_error',
			payload: 'Something went wrong in signin!',
		});
	}
};

const signout = dispatch => {
	return () => {
		//Signout
	};
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signup, signin, signout, clearErrorMessage },
	{
		token: null,
		errorMessage: '',
	}
);
