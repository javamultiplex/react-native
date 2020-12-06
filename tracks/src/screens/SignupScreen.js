import React, { useState } from 'react';
import {
	View,
	StyleSheet,
	ScrollView,
	KeyboardAvoidingView,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
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
				<Spacer>
					<Button title='Sign Up' />
				</Spacer>
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
