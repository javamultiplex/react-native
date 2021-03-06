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
		case 'signout':
			return { token: null, errorMessage: '' };
		default:
			return state;
	}
};

const tryLocalSignin = dispatch => async () => {
	const token = await AsyncStorage.getItem('token');
	if (token) {
		dispatch({
			type: 'signin',
			payload: token,
		});
		navigate('TrackList');
	} else {
		navigate('Signup');
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

const signout = dispatch => async () => {
	await AsyncStorage.removeItem('token');
	dispatch({
		type: 'signout',
	});
	navigate('loginFlow');
};

export const { Context, Provider } = createDataContext(
	authReducer,
	{ signup, signin, signout, clearErrorMessage, tryLocalSignin },
	{
		token: null,
		errorMessage: '',
	}
);
