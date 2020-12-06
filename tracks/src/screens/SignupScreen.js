import React, { useState, useContext } from 'react';
import {
	View,
	StyleSheet,
	KeyboardAvoidingView,
	TouchableOpacity,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext, Context } from '../contexts/AuthContext';
const SignupScreen = ({ navigation }) => {
	const { state, signup } = useContext(Context);
	const [email, setEmail] = useState('');
	const [password, setPasssword] = useState('');
	return (
		<KeyboardAvoidingView>
			<View style={styles.container}>
				<Spacer>
					<Text h3>Sign Up for Tracker</Text>
				</Spacer>
				<Input
					label='Email'
					value={email}
					onChangeText={setEmail}
					autoCapitalize='none'
					autoCorrect={false}
				/>
				<Spacer />
				<Input
					secureTextEntry
					label='Password'
					value={password}
					onChangeText={setPasssword}
					autoCapitalize='none'
					autoCorrect={false}
				/>
				{state.errorMessage ? (
					<Text style={styles.errorMessage}>{state.errorMessage}</Text>
				) : null}
				<Spacer>
					<Button title='Sign Up' onPress={() => signup({ email, password })} />
				</Spacer>
				<TouchableOpacity onPress={() => navigation.navigate('Signin')}>
					<Spacer>
						<Text style={styles.link}>
							Already have an account? Sign in instead
						</Text>
					</Spacer>
				</TouchableOpacity>
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
	errorMessage: {
		fontSize: 16,
		color: 'red',
		marginLeft: 15,
	},
	link: {
		color: 'blue',
	},
});

export default SignupScreen;
