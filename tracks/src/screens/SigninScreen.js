import React, { useContext } from 'react';
import { View, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../contexts/AuthContext';
const SigninScreen = () => {
	const { state, signin, clearErrorMessage } = useContext(AuthContext);
	return (
		<KeyboardAvoidingView>
			<View style={styles.container}>
				<NavigationEvents onWillFocus={clearErrorMessage} />
				<AuthForm
					headerText='Sign In to your Account'
					submitButtonLabel='Sign In'
					onSubmit={signin}
					errorMessage={state.errorMessage}
				/>
				<NavLink
					text="Don't have an account? Sign Up instead!"
					routeName='Signup'
				/>
			</View>
		</KeyboardAvoidingView>
	);
};

SigninScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 100,
	},
});

export default SigninScreen;
