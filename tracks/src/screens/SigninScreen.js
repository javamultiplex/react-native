import React from 'react';
import { View, KeyboardAvoidingView, Text, StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
const SigninScreen = () => {
	return (
		<KeyboardAvoidingView>
			<View style={styles.container}>
				<AuthForm
					headerText='Sign In to your Account'
					submitButtonLabel='Sign In'
					onSubmit={() => {}}
					errorMessage=''
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
