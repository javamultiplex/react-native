import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../contexts/AuthContext';
const SignupScreen = () => {
	const { state, signup, clearErrorMessage } = useContext(AuthContext);

	return (
		<KeyboardAvoidingView>
			<View style={styles.container}>
				<NavigationEvents onWillFocus={clearErrorMessage} />
				<AuthForm
					headerText='Sign Up for Tracker'
					submitButtonLabel='Sign Up'
					errorMessage={state.errorMessage}
					onSubmit={signup}
				/>
				<NavLink
					text='Already have an account? Sign In instead!'
					routeName='Signin'
				/>
			</View>
		</KeyboardAvoidingView>
	);
};

SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 100,
	},
});

export default SignupScreen;
