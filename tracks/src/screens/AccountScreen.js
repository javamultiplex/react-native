import React, { useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../contexts/AuthContext';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
	const { signout } = useContext(AuthContext);
	return (
		<>
			<Text style={{ fontSize: 48 }}>AccountScreen</Text>
			<Spacer>
				<Button title='Sign Out' onPress={signout} />
			</Spacer>
		</>
	);
};

const styles = StyleSheet.create({});

export default AccountScreen;
